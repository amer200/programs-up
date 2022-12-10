const showElement = (id) => {
  const showE = document.getElementById(id);
  const hideE = Array.from(document.getElementsByClassName('all-forms'));
  hideE.forEach(e => {
    if (!Array.from(e.classList).includes('d-none')) {
      e.classList.add('d-none');
    }
  })
  showE.classList.remove('d-none');
}
// aritcal
const newArticalContent = document.getElementById('newArticalContent');
const newArticalForm = document.getElementById('newArticalForm');
const newArticalBtn = document.getElementById('newArticalBtn');

const addNewArical = () => {
  const content = quill.root.innerHTML;
  newArticalContent.value = content;
  newArticalForm.submit();
}
//////////////////////////////
const removeFile = (id) => {
  if (confirm('remove this file ?')) {
    fetch(`/admin/remove-file/${id}`)
      .then(res => {
        location.reload()
      })
      .catch(err => {
        alert(err)
      })
  }
}
const copyFileLink = (link) => {
  navigator.clipboard.writeText(`${window.location.href.split('/admin')[0]}${link}`);
}
//////////////////////////////////////
const removeArt = (id) => {
  fetch(`/admin/remove-art/${id}`)
    .then(res => {
      location.reload();
    })
    .catch(err => {
      console.log(err)
    })
}