document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sponsorship-contact-form");
    const formFeedback = document.getElementById("sponsorship-form-feedback");
    if(!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const elements = event.target.elements;
        const name = elements.name.value;
        const companyName = elements.companyName.value;
        const jobPosition = elements.jobPosition.value || "Unspecified";
        const budget = elements.budget.value;
        const emailAddr = elements.emailAddr.value;
        const telNum = elements.telNum.value || "Unspecified";
        const interestedIn = elements.interestedIn.value;
        const message = elements.message.value;

        const requiredFields = [name, companyName, jobPosition, budget, emailAddr, telNum, interestedIn, message];
        if(requiredFields.find(val => !val)) {
            formFeedback.textContent = "Please fill in all required fields.";
            return;
        }

        // uses MS PowerAutomate workflow for back-end processing
        const processingURL = "https://prod-139.westeurope.logic.azure.com:443/workflows/83671c3104be4329813f7b996418f427/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Sel8HbeYlcu_jZiXXEF2kq8YHJn7A9SfaI-lT1rjnWs";
        fetch(processingURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                companyName,
                jobPosition,
                budget,
                emailAddr,
                telNum,
                interestedIn,
                message,
            }),
        }).then(function(resp) {
            if(resp.status >= 200 || resp.status < 300) {
                formFeedback.textContent = "Your query has been passed on to our committee, who aim to reply as soon as possible";
            } else {
                formFeedback.textContent = "An unexpected error occurred. Please contact us by email instead.";
            }
        });
    });
});
