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
  * Ví dụ: create-react-app myapp //Lưu ý: tên không viết hoa.
* cd vào thư mục project: 
  * cd myapp
* Khởi chạy ứng dụng: 
  * npm start
* Mặc định chạy port 3000, để đổi port vào file package.json tìm đến dòng "start" sửa thành "start": "set port=4200 && react-scripts start" (Lưu ý: port=4200 viết liền)
* Lưu ý: Lỗi "Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist." do một extentsion được cài đặt gây ra, không phải do chương trình.
# Tuần 3: Component
* [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/)
  * Sau khi giải nén copy 3 thư mục css, fonts, js vào thư mục public trong project.
* Download [JQuery](https://jquery.com/download/) bỏ vào thư mục public/js trong project (js là thư mục của bootstrap).
* Trong file index.html thêm: 
  * Dưới thẻ link thứ 2: 
    *  `<link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/css/bootstrap.min.css">`
  * Dưới id="root" (mặc định) thêm: 
    *  `<script src="%PUBLIC_URL%/js/jquery-3.4.0.min.js"></script>`
    *  `<script src="%PUBLIC_URL%/js/bootstrap.min.js"></script>`
* Lưu ý: 
  *  `href="#" => href="/"`
  *  `<h3 style={{ textAlign: 'center' }}> <h3/>`
  *  `class => className`
  *  tagWrapper: Các phần tử JSX phải được bao bọc bởi 1 thẻ bên ngoài: ví dụ: <div>...<div/>
# Tuần 4: JSX - Javascript + XML - Javascript + eXtensible Markup Language
* Trong thực tế, designer có thể gửi mã nguồn viết bằng HTML, tuy nhiên ta đang làm việc với JSX:
  *  Công cụ để chuyển từ [HTML => JSX](https://magic.reactjs.net/htmltojsx.htm)
  *  Với đoạn JSX trả về chỉ cần quan tâm hàm render: return(...)
  *  Render là 1 hàm nên có thể khai báo biến như bình thường: var a = 5; Để gọi 1 biến sử dụng: {<tên biến>} {a}
  *  Các phép toán có thể được gọi trong {}. Ví dụ: {a+b}
  *  Tương tự với các Object: {<tên Object>.<thuộc tính>}