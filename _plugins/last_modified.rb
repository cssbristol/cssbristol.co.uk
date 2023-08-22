module Jekyll
  module LastModified
    module Hook
      def self.add_determinator_proc
        proc { |item|
          absolute_path_to_article = Jekyll.sanitized_path(item.site.source, item.path)
          git_log_time = `git --git-dir #{Dir.pwd + "/.git"} log -1 --format="%ct" #{absolute_path_to_article} || echo "0"`[..-2]
          item.data['last_modified_at'] = Time.at(git_log_time.to_i())
        }
      end
      Jekyll::Hooks.register :documents, :post_init, &Hook.add_determinator_proc
    end
  end
end