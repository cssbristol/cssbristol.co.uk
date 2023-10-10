#!/usr/bin/env python3.9
# Author: danjones1618 <hello@danjones.dev>

from datetime import datetime, timedelta
from dataclasses import dataclass
from discord_webhook import DiscordWebhook
from typing import Optional, List, Union
from pathlib import Path
from requests import Response
import sys
import os
import frontmatter
import glob
import pytz


DISCORD_URL = os.getenv("DISCORD_URL")

@dataclass
class Event:
    published: bool
    cancelled: bool
    title: Optional[str]
    date: Optional[datetime]
    location: Optional[str]
    ticket_link: Optional[str]
    price: str
    website_link: str


def parse_datetime(date: Union[datetime, str, None]) -> Optional[datetime]:
    if not date:
        return None
    elif isinstance(date, datetime):
        print(date)
        return date
    return datetime.strptime(date, "%Y-%m-%d %H:%M:%S %z")



def get_event(path: Path) -> Event:
    metadata = frontmatter.load(path).metadata
    event= Event(metadata.get("published", False),
                 metadata.get("cancelled", False),
                 metadata.get("title", None),
                 parse_datetime(metadata.get("date", None)),
                 metadata.get("location", None),
                 metadata.get("ticket_link", None),
                 metadata.get("price", "Free"),
                 f"https://cssbristol.co.uk/events/{path.name.replace('.md', '').replace(' ', '%20')}/")
    return event


def post_daily_post(events: List[Event]) -> None:
    events_list = ""
    for e in events:
        if e.cancelled:
            continue
        if e.date:
            events_list += f"- {e.title} @ {e.date.strftime('%H:%M')}\n  {e.website_link}\n"
        else:
            events_list += f"- {e.title}\n  {e.website_link}\n"

    if not events_list:
        return 

    post_msg(f"Today we have the following events: :eyes:\n{events_list}\nLooking forward to seeing you!")


def post_warning(event: Event) -> None:
    if (event.cancelled):
        return
    post_msg(f"Today's event, {event.title}, is starting in 15 Minutes! :tada:\n{event.website_link}")

def post_msg(msg: str) -> None:
    webhook = DiscordWebhook(url=DISCORD_URL)
    webhook.set_content(content=msg)
    response = webhook.execute()
    handle_response(response)


def handle_response(response: Union[Response, List[Response]]) -> None:
    if isinstance(response, list):
        for resp in response:
            if not resp.ok:
                print(f"Had an error {resp.reason}", file=sys.stderr)
                exit(1)
    elif isinstance(response, Response):
        if not response.ok:
            print(f"Had an error {response.reason}", file=sys.stderr)
            exit(1)
    else:
        print("An error occured", file=sys.stderr)
        exit(1)


def main(daily_post: bool) -> None:
    today = datetime.now(pytz.timezone("Europe/London"))
    warning_mins = 15
    daily_posts: List[Event] = []

    for event_path in glob.iglob("_events/*"):
        if event_path.endswith("template"):
            continue
        event = get_event(Path(event_path))
        if event.date:
            delta = event.date - today
            if daily_post and delta <= timedelta(hours=20) and delta >= timedelta():
                daily_posts.append(event)
            elif delta <= timedelta(minutes=warning_mins) and delta >= timedelta():
                post_warning(event)

    if daily_post:
        post_daily_post(daily_posts)


if __name__ == "__main__":
    # --daily-post flag (only one argument so hacky)
    if DISCORD_URL is None:
        print("$DISCORD_URL is not set!", file=sys.stderr)
        exit(1)
    main(len(sys.argv) == 2)

