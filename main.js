   //https://api.github.com/users/MMathiasRS

   $(document).ready(() => {
    $.get("https://api.github.com/users/MMathiasRS", res => {
      console.log(res)
      $('#nome').append(res.login)
      $('#instagram').append(res.login)
      $('#resposi').append(res.public_repos)
      $('#followers').append(res.followers)
      $('#following').append(res.following)
      $('.profile-avatar').attr('src',res.avatar_url)
      $('.profile-link').attr('href',res.html_url)
    });
  });