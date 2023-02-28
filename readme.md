### Thống nhất tên class
Gạch dưới tất cả để tránh đặt trùng với bootstrap
# Quy tắc, cách sử dụng BEM đối với block, element, modifier
 - Tên block có thể bao gồm các chữ cái Latinh, chữ số.
 - Tạo CSS class: thêm một tiền tố vào phía trước. VD: .block
 - Không đặt id cho css (Chỉ dùng cho js)
 - Không dùng tên tag (thẻ) (Trừ khi thống nhất)
 - Không phụ thuộc vào các block/element khác trên một trang

 - Tên element có thể bao gồm các chữ cái Latinh, chữ số, 2 dấu gạch dưới. 
 - Tạo class CSS: tên block cộng với hai dấu gạch dưới, cộng với tên element.
 - VD: .block__elem
 - Bất kỳ node DOM nào trong một block đều có thể là một element.
 - Trong một block nhất định, tất cả các element đều bằng nhau về mặt ngữ nghĩa.
 - VD: 
<!-- <div class="block">
            ...
  <span class="block__elem"> </span>
</div> -->
 - Chỉ sử dụng bộ chọn class
 - Không dùng tên tag (thẻ) hoặc id
 - Không phụ thuộc vào các block/element khác trên một trang
 - KHÔNG .block .block__elem { color: #042; } hoặc div.block__elem { color: #042; }

 - Tên của modifier có thể bao gồm các chữ cái Latinh, chữ số, dấu gạch dưới. 
 - Tạo class CSS: tên block hoặc element cộng với hai dấu gạch ngang, cộng với tên modifier.
 - Dấu cách trong các modifier dài (chứa 2 tiếng trở lên) được thay thế bằng dấu gạch ngang.
 - VD .block--mod { }
.block__elem--mod { }
.block--color-black { }
.block--color-red { }

 - Modifier là tên class mà bạn thêm vào node DOM block/element. 
 - Tăng thêm các modifier class vào các block/element mà chúng ta cần sửa đổi và giữ lại class ban đầu của block/element đó.
 - Nên (thêm các class mới có chứa modifier, và giữ nguyên class cũ .block):
 - Không nên (thay thế class cũ):
 - Sử dụng modifier class làm bộ chọn CSS. VD: .block--hidden { }
 - Thay đổi các element dựa trên block có chứa modifier. VD: .block--mod .block__elem { }
 - Element có modifier. VD: .block__elem--mod { }
 
- Đối với các thuộc tính chỉ có size vd: font-size: 2rem thì .font_size_2
