# frozen_string_literal: true

require 'os'
require 'extensionator'

namespace :compile do
  desc 'Creates unpacked chrome extension folder'
  task :unpacked, [:browser] do |_task, args|
    sh 'npm run prod'
    build_dir = create_build_root args[:browser]
    copy_assets_files build_dir
    webpack_bundle build_dir
    cleanup_js_folder build_dir
  end

  task :packed, [:browser] do |_task, args|
    Rake.application.invoke_task("compile:unpacked[#{args[:browser]}]")
    build_dir = create_build_root args[:browser], false
    compile_zip(build_dir, args[:browser]) if args[:browser] == 'chrome'
    compile_zip(build_dir, args[:browser]) if args[:browser] == 'firefox'
  end
end

def create_build_root(browser, remove_folder = true)
  root = File.join('build', browser)
  if remove_folder
    FileUtils.rm_rf root
    FileUtils.mkdir_p root
  end
  root
end

def copy_assets_files(root)
  Dir.glob('./src/*').reject { |f| f['/js'] }.each do |item|
    if File.directory?(item)
      FileUtils.copy_entry item, File.join(root, File.basename(item))
    else
      FileUtils.cp item, File.join(root)
    end
  end
end

def webpack_bundle(root)
  FileUtils.cp_r('./dist/js/.', File.join(root, 'js'))
end

def cleanup_js_folder(root)
  FileUtils.rm_rf File.join(root, 'js', 'content')
end

def compile_zip(root, browser)
  Extensionator.zip(root, File.join(root, "#{browser}.zip"))
end
