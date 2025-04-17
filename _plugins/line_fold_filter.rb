module Jekyll
  module LineFoldFilter
    def fold_lines(input, line_length = 55)
      return input unless input.is_a?(String)

      # Replace all newline characters with literal backslash-n
      input = input.gsub("\n", '\\n')

      fold_line(input, line_length)
    end

    private

    def fold_line(line, line_length)
      return line if line.length <= line_length

      segments = []
      while line.length > line_length
        segments << line.slice!(0, line_length)
      end
      segments << line unless line.empty?

      segments[0..-2].map { |s| "#{s}\r\n " }.join + segments[-1]
    end
  end
end

Liquid::Template.register_filter(Jekyll::LineFoldFilter)