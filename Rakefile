require "bundler/setup"

def build
  system "middleman build --clean"
end

desc "Run development server"
task :server do
  system "middleman server"
end

desc "Build & clean"
task :build do
  build
end

desc "Build & deploy to Github Pages"
task :deploy do
  build
  system "netlify deploy"
end