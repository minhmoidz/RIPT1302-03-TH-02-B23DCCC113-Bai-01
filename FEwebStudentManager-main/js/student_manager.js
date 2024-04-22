const studentList = [
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Nguyễn Thị Hằng",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "hang.nguyen@gmail.com",
  },
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Bùi Thị Như",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "buinhu@gmail.com",
  },
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Ngô Thị Trang",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "trang.ngo@egmail.com",
  },
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Nguyễn Hữu Tuân",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "huutuan@egmail.com",
  },
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Hoàng Thị Kim",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "kim.hoang@gmail.com",
  },
  {
    studentId: "Chưa có hình ảnh",
    studentName: "Nguyễn Thị Vân Anh",
    studentClass: "Công nghệ thông tin",
    studentStatus: "Hệ thống thông tin",
    studentUsername: "Đang đợi cấp tài khoản",
    studentPassword: "123456",
    studentPhone: "012345678",
    studentEmail: "vananhng@gmail.com",
  },
];

let studentListLoad = studentList.concat();

// Admin Layout
const arrowsList = document.querySelectorAll(".arrow");
arrowsList.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
});

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  document.querySelectorAll(".nav-links li").forEach((listItem) => {
    if (listItem.classList.contains("showMenu")) {
      listItem.classList.remove("showMenu");
    }
  });
});

// render modal
function studentItemRenderModal(studentItem, studentItemIndex) {
  const examItemModalElement = `
  <div class="modal-header">
      <h1 class="modal-title fs-5" id="staticBackdropLabel">Giáo viên ${studentItem.studentName}</h1>
      <button type="button" class="btn btn-delete" id="btnDelExamModal" data-bs-dismiss="modal"
          aria-label="Delete">Xoá
          thông tin</button>
  </div>
  <div class="modal-body">
      <div class="container-fluid">
          <h4 class="mb-3">Thông tin cá nhân</h4>
          <form class="needs-validation" novalidate>
              <div class="row g-3 mb-4">
                  <div class="col-sm-6">
                      <label for="fullName" class="form-label">Họ và tên</label>
                      <input type="text" class="form-control" id="fullName" placeholder="" value="${studentItem.studentName}"
                          required>
                      <div class="invalid-feedback">
                          Họ và tên không được để trống.
                      </div>
                  </div>

                  <div class="col-sm-6">
                      <label for="studentClass" class="form-label">Lớp dạy</label>
                      <input type="text" class="form-control" id="studentClass" placeholder=""
                          value="${studentItem.studentClass}" required>
                      <div class="invalid-feedback">
                          Lớp không được để trống.
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="username" class="form-label">Tên đăng nhập</label>
                      <div class="input-group has-validation">
                          <input type="text" class="form-control" id="username" placeholder="Username" value="${studentItem.studentUsername}"
                              required>
                          <div class="invalid-feedback">
                              Tên đăng nhập không được để trống.
                          </div>
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="passwordỵ" class="form-label">Mật khẩu</label>
                      <div class="input-group has-validation">
                          <input type="text" class="form-control" id="username"
                              placeholder="Password" value="${studentItem.studentPassword}" required>
                          <div class="invalid-feedback">
                              Mật khẩu không được để trống.
                          </div>
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="email" class="form-label">Email <span class="text-muted"> (Tùy
                              chọn)</span></label>
                      <input type="email" class="form-control" id="email"
                          placeholder="you@example.com" value="${studentItem.studentEmail}">
                      <div class="invalid-feedback">
                          Vui lòng nhập email đúng định dạng.
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="phoneNumber" class="form-label">Điện thoại <span class="text-muted">
                              (Tùy
                              chọn)</span></label>
                      <input type="text" class="form-control" id="phoneNumber" placeholder="(+84)" value="${studentItem.studentPhone}">
                      <div class="invalid-feedback">
                          Vui lòng nhập số điện thoại đúng định dạng.
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary"
                      data-bs-dismiss="modal">Đóng</button>
                  <button type="submit" class="btn save-btn" data-bs-save="modal">Lưu</button>
              </div>
          </form>
      </div>
  </div>`;

  document.querySelector(".modal-content").innerHTML = "";
  document
    .querySelector(".modal-content")
    .insertAdjacentHTML("afterbegin", examItemModalElement);
  document.querySelector(".btn-delete").addEventListener("click", () => {
    studentListLoad.splice(studentItemIndex, 1);
    renderTable();
  });
}

// Load student list
const tableStudentManager = document.querySelector(".table-student-manager");

function renderTableResult(studentRenderList) {
  studentRenderList.forEach((studentItem, studentItemIndex) => {
    const studentItemElement = `<tr visible="true">
    <th scope="row">${studentItemIndex + 1}</th>
    <td>${studentItem.studentId}</td>
    <td>${studentItem.studentName}</td>
    <td>${studentItem.studentClass}</td>
    <td>${studentItem.studentStatus}</td>
    <td>
    <button id="studentBtnModal ${studentItemIndex}" type="button" class="btn btn-primary btn-detail-student" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    Thông tin
    </button>
    </td>
    </tr>`;
    tableStudentManager.insertAdjacentHTML("beforeend", studentItemElement);
    document
      .getElementById("studentBtnModal " + studentItemIndex)
      .addEventListener("click", () => {
        studentItemRenderModal(studentItem, studentItemIndex);
        document.querySelector(".sidebar").classList.add("close");
      });
  });
}

// Search bar function
function searchBarFunction() {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $(".results tbody").children("tr");
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    $.extend($.expr[":"], {
      containsi: function (elem, i, match, array) {
        return (
          (elem.textContent || elem.innerText || "")
            .toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0
        );
      },
    });

    $(".results tbody tr")
      .not(":containsi('" + searchSplit + "')")
      .each(function (e) {
        $(this).attr("visible", "false");
      });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr("visible", "true");
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
    $(".counter").text(jobCount + " item");

    if (jobCount == "0") {
      $(".no-result").show();
    } else {
      $(".no-result").hide();
    }
  });
}

const studentStatusRadios = document.querySelectorAll(
  'input[name="studentStatus"]'
);
const orderByRadios = document.querySelectorAll('input[name="orderBy"]');
const selectStudentSubject = document.getElementById("selectStudentSubject");
const tableRows = document.querySelectorAll("tbody tr");

function filterStudentListResult(studentListFilter) {
  const selectedStudentStatus = document.querySelector(
    'input[name="studentStatus"]:checked'
  ).value;
  const selectedOrderBy = document.querySelector(
    'input[name="orderBy"]:checked'
  ).value;
  const selectedSubject = selectStudentSubject.value;

  let studentListResult = studentListFilter.concat();

  if (selectedOrderBy == 1) {
    studentListResult.sort((a, b) => {
      if (a.studentName === b.studentName) return 0;
      return a.studentName > b.studentName ? 1 : -1;
    });
  } else {
    studentListResult.sort((a, b) => {
      const num1 = parseInt(a.studentId.substring(1, 3));
      const num2 = parseInt(b.studentId.substring(1, 3));
      if (num1 === num2) return 0;
      return num1 > num2 ? 1 : -1;
    });
  }

  studentListResult = selectedStudentStatus.match("allStatus")
    ? studentListResult
    : studentListResult.filter((studentItem) =>
      studentItem.studentStatus.match(selectedStudentStatus)
    );

  studentListResult = selectedSubject.match("allSubject")
    ? studentListResult
    : studentListResult.filter((studentItem) =>
      studentItem.studentId.substring(5, 7).match(selectedSubject)
    );

  return studentListResult;
}

function renderTable() {
  tableStudentManager.innerHTML = "";
  const studentListAfterFilter = filterStudentListResult(studentListLoad);
  renderTableResult(studentListAfterFilter);
  var itemCount = $('.results tbody tr[visible="true"]').length;
  $(".counter").text(itemCount + " item");

  if (itemCount == "0") {
    $(".no-result").show();
  } else {
    $(".no-result").hide();
  }
}

studentStatusRadios.forEach((studentStatusRadioItem) => {
  studentStatusRadioItem.addEventListener("click", () => {
    renderTable();
  });
});

orderByRadios.forEach((orderByRadioItem) => {
  orderByRadioItem.addEventListener("click", () => {
    renderTable();
  });
});

selectStudentSubject.addEventListener("change", () => {
  renderTable();
});

$(document).ready(function () {
  renderTable();
  searchBarFunction();
});
