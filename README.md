# learning-ReactJS
# Tuần 1:
* Cài đặt:
* Extensions:
  1. React-detector
  2. Show-me-the-react
  3. React Developer Tools
* Node.JS:
  1. [Node.JS](https://nodejs.org/en/)
  2. npm
* Kiểm tra version:
  1. node -v
  2. npm -v
* Sublime Text 3:
  * Package Control: View -> show console -> Nhập:
  * import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
  * Tab Preferences xuất hiện thẻ Package Control.
  * Vào Package Control chọn: Package Control: Install Package
* Cài đặt: 		
  * Babel
  * JSX
  * Babel Snippets
  * Emmet
  * FileManager
# Tuần 2: Khởi tạo project ReactJS đầu tiên:
* cmd: npm install -g create-react-app
* Vào folder cần tạo project mở cmd: create-react-app <tenProject> 
  * Ví dụ: create-react-app myapp
* cd vào thư mục project: 
  * cd myapp
* Khởi chạy ứng dụng: 
  * npm start
* Mặc định chạy port 3000, để đổi port vào file package.json tìm đến dòng "start" sửa thành "start": "set port=4200 && react-scripts start" (Lưu ý: port=4200 viết liền)
* Lưu ý: Lỗi "Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist." do một extentsion được cài đặt gây ra, không phải do chương trình.