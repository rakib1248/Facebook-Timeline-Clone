const form = document.getElementById("student_form");
const msg = document.querySelector(".msg");
const closerModal = document.querySelector("#modalClose");
const newPost = document.querySelector("#newPost");
const Post_update = document.querySelector("#Post_update");
const deletepost = document.querySelector("#deleteData");
const modalClose2 = document.querySelector("#modalClose2");
const dilete_Data = document.querySelector(".dilete-Data");

// Show All STudentData
const allStudentDataList = () => {
  const form_Data = getDataLs("form_Data");
  let dataList = "";
  if (form_Data) {
    form_Data.reverse().forEach(function (item, index) {
      dataList += `
      <div class="post-aria p-4 mt-3 bg-white rounded-2">
      <div class="d-flex align-content-center justify-content-between">
        <div class="lefi-sec d-flex gap-2 align-items-CENTER">
          <div><img class="rounded-circle images-fix" src="${
            item.photo
          }" alt=""></div>
          <div>
            <p class="m-0"><strong>${item.name}</strong></p>
            <p class="text-muted"> ${timeAgo(
              item.CreatedAt
            )}<i class="fa-light fa-earth-americas text-bg-light ms-1"></i></p>

          
          </div>



        </div>
        <div class="right">
          <a href="" class=" d-inline-block me-2 text-decoration-none" data-bs-toggle="modal" data-bs-target="#post-update-create"  id="deleteData"
          onclick="UpdatePosttData('${item.id}')">
            <span class="fs-2 mr-3"><i class="fa-regular fa-pen-to-square"></i></span>

          </a>
          
          <a href="#"  class=" d-inline-block text-decoration-none dilete-Data " onclick="DelateStudentData('${
            item.id
          }')">
            <span class="fs-2 ms-1"><i class="fa-light fa-circle-xmark"></i></span>

          </a>
          
          
        </div>
      </div>
      <div class="content-sec">
        <p class="text-muted ">
          ${item.content}
        </p>
        <img class="w-100 my-2" src="${item.post_photo}" alt="">

        <hr>
        <div class="d-flex justify-content-around">

          <div class="d-flex gap-2  mind-btn">
            <span class="fs-3  "><i class="fa-solid fa-thumbs-up"></i></span>
            <h5 class="text-muted mt-2">Like </h5>
        </div>

          <div class="d-flex gap-2  mind-btn">
            <span class="fs-3  "><i class="fa-solid fa-comment"></i></span>
            <h5 class="text-muted mt-2">Comment</h5>
        </div>

           <div class="d-flex gap-2  mind-btn">
            <span class="fs-3  "><i class="fa-solid fa-share-all"></i></span>
            <h5 class="text-muted mt-2">Share </h5>
        </div>
 </div>


      </div>
    </div>
      `;
    });
  }
  newPost.innerHTML = dataList;
};

// update post Data

const UpdatePosttData = (id) => {
  const Data = JSON.parse(localStorage.getItem("form_Data"));
  const { name, photo, content, post_photo } = Data.find(
    (data) => data.id == id
  );

  Post_update.querySelector('input[name="name"]').value = name;
  Post_update.querySelector('input[name="photo"]').value = photo;
  Post_update.querySelector('textarea[name="content"]').value = content;
  Post_update.querySelector('input[name="post_photo"]').value = post_photo;
  Post_update.querySelector('input[name="id"]').value = id;
};

// delate post Data
const DelateStudentData = (id) => {
  const conf = confirm("Apni Ki Sotti Apnar post Delate korte Can?");
  if (conf) {
    deleteStuden("form_Data", id);

    allStudentDataList();
  }
};

allStudentDataList();

// submit Data

form.onsubmit = (e) => {
  e.preventDefault();

  // form Data
  const form_Data = new FormData(e.target);

  const { name, photo, content, post_photo } = Object.fromEntries(
    form_Data.entries()
  );

  //   form Validation
  if (!name) {
    msg.innerHTML = creatAlert("Your Name fields are Required");
  } else if (!photo) {
    msg.innerHTML = creatAlert("Your image fields are Required", "warning");
  } else if (!content) {
    msg.innerHTML = creatAlert("Your Content fields are Required", "warning");
  } else {
    sendDataLs("form_Data", {
      name: name,
      id: CreatedId(),
      photo: photo,
      content: content,
      post_photo: post_photo,
      CreatedAt: Date.now(),
    });

    e.target.reset();
    closerModal.click();
    allStudentDataList();
  }
};

// update post

Post_update.onsubmit = (e) => {
  e.preventDefault();
  const updateData = new FormData(e.target);
  const { name, photo, content, post_photo, id } =
    Object.fromEntries(updateData);

  const data = JSON.parse(localStorage.getItem("form_Data"));

 const UpdateData = data.map((item) => {
    if (item.id == id) {
      return {
        ...item,
        name,
        photo,
        content,
        post_photo,
      };
    } else {
      return item;
    }
  });
 localStorage.setItem('form_Data',JSON.stringify(UpdateData))
 modalClose2.click();
 allStudentDataList();
};
