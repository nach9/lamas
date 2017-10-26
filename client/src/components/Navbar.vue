<template>
  <div class="Navbar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <ul class="nav navbar-nav navbar-right">
            <li @click="perubahan()"><a href="#"><img class="image" src="http://downloadicons.net/sites/default/files/camera-icon-41991.png"><b>   Upload Foto</b></a></li>
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!-- <li><a href="/">Home</a></li>
            <li><a href="#">Profile</a></li> -->
          </ul>

          <!-- <ul class="nav navbar-nav navbar-right">
            <li @click="perubahan()"><a href="#"><img class="image" src="http://downloadicons.net/sites/default/files/camera-icon-41991.png"><b>   Upload Foto</b></a></li>
          </ul> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  width: 30px;
}
.form-control {
  margin-bottom: 10px;
}
.pembatascol {
  padding-bottom: 15px;
}
</style>
