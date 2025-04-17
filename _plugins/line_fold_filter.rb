module Jekyll
  module LineFoldFilter
    def fold_lines(input, line_length = 55)
      return input unless input.is_a?(String)

      folded_lines = input.split("\n").map do |line|
        fold_line(line, line_length)
      end

      folded_lines.join("\n")
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