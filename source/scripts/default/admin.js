let height = window.innerHeight;
window.addEventListener('resize', () => {
  height = window.innerHeight;
});

$(document).ready(function () {
  $('.admin-user').on('click', function () {
    $('.admin-user-menu').slideToggle();
  });
  $('.menu-toggle').on('click', function () {
    $('.menu-list').slideToggle();
  });

  $('[data-tooltip="tooltip"]').tooltip();

  $(document).on('click', '.has-addInput-group .add-inputBtn', function () {
    if ($('.has-addInput-group .addInput-item').length == 2) {
      $('.add-inputBtn').addClass('disabled');
      $(this).parents('.has-addInput-group').append('<div class="d-flex addInput-item mt-2"><input class="form-control" type="email" placeholder="請輸入Email"><span class="add-inputBtn disabled"><i class="icon-add"></i></span></div>');
    } else if ($('.has-addInput-group .addInput-item').length < 3) {
      $(this).parents('.has-addInput-group').append('<div class="d-flex addInput-item mt-2"><input class="form-control" type="email" placeholder="請輸入Email"><span class="add-inputBtn"><i class="icon-add"></i></span></div>');
      return false;
    }
  });

  $(document).on('click', '.has-lessInput-group .less-inputBtn', function () {
    $(this).parents('.lessInput-item').remove();
  });

  $('#imageUpload').change(function () {
    readImgUrlAndPreview(this);

    function readImgUrlAndPreview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview').attr('src', e.target.result);
          $('#imagePreview').css('opacity', 1);
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  });

  $('#edit-imageUpload').change(function () {
    readImgUrlAndPreview(this);

    function readImgUrlAndPreview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#edit-imagePreview').attr('src', e.target.result);
          $('#edit-imagePreview').css('opacity', 1);
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  });

  $('.collapse-body .collapse-toggle').on('click', function () {
    $(this).parents('.collapse-body').toggleClass('active').siblings().removeClass('active');
    $(this).parents('.collapse-body').find('.collapse-body-inner').slideToggle().parents('.collapse-body').siblings().find('.collapse-body-inner').slideUp();
  });

  $('#member-pagination').pagination({
    total: 1000, // 总数据条数
    current: 1, // 当前页码
    length: 10, // 每页数据量
    size: 2, // 显示按钮个数
  });

  $('#vote-pagination').pagination({
    total: 100, // 总数据条数
    current: 1, // 当前页码
    length: 10, // 每页数据量
    size: 2, // 显示按钮个数
  });

  $('#send-pagination').pagination({
    total: 100, // 总数据条数
    current: 1, // 当前页码
    length: 10, // 每页数据量
    size: 2, // 显示按钮个数
  });

  // Tab
  $(function () {
    var _showTab = 0;
    var $defaultLi = $('ul.cutover li').eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().removeClass('show');

    $('ul.cutover li').click(function () {
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');
      $this.addClass('active').siblings('.active').removeClass('active');
      $(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

      return false;
    }).find('a').focus(function () {
      this.blur();
    });
  });
});