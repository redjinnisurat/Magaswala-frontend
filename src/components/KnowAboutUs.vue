<template>
  <h5 class="know">Know about us</h5>
    <div class="container">
      
    
      <div class="row">
        <div class="left">
           <img src="@/assets/dham.png" alt="" style="width: 28em; height: 31em;">
        </div>
        <div class="right">
          <div class="content">
          <p>Lorem ipsum dolor sit amet,<br> consetetur sadipscing elitr,<br> sed diam nonumy eirmod<br> tempor invidunt ut labore et<br> dolore magna aliquyam<br> erat, sed diam voluptua. At<br> vero eos et accusam et<br> justo duo dolores et ea<br> rebum. Stet clita kasd<br> gubergren, no sea takimata<br> sanctus est Lorem ipsum</p>
        </div>
        </div>
      </div>
   </div>
</template>

<script>
export default{
    name: "KnowAboutUs",
}
</script>

<style scoped>
body{
  width: 100%;
  min-height: 100vh;
  display: grid;
  /* place-items: center; */
}
.container{
  margin-left: 5em;
  margin-top: 1.5em;
}
.know{
  font-weight: bold;
  font-size: 1.5em;
  margin-left: 4em;
  margin-top: 2em;
}
.row{
  width: 80%;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px 30px;
}
.row .left{
  overflow: hidden;
}
.row .left img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row .right{
  display: flex;
  align-items: center;
}
.row .right .content{
  padding-left: 20px;
}
.row .right .content p{
  font-size: 30px;
  font-weight: 500;
  font: normal normal medium 55px/83px Poppins;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  /* line-height: 0px; */
  /* top: 1888px;
left: 986px;
width: 794px;
height: 916px; */
}

@media screen and (max-width: 990px) {
  .know{
    margin-left: 1em;
  }
  .container{
    margin-left: 1em;
  }
  .row{
    width: 55em;
  }
    .row .right .content{
        padding-left: 0;
    }
}

@media screen and (max-width: 790px) {
    .row .left img{
        width: 100%;
    }
    /* .row{
        width: 90%;
        grid-template-columns: 1fr;
    } */
}

@media screen and (max-width: 690px) {
  .row{
    width: 65em;
  }
}

@media screen and (max-width: 590px) {
  .know{
    margin-left: 6em;
  }
  .container{
    margin-left: 9em;
    margin-top: 3em;
    width: 90em;
  }
}
@media screen and (max-width: 490px) {
  .know{
    width: 15em;
    font-size: 3em;
    margin-left: 3em;
  }
}
@media screen and (max-width: 390px) {
  .container{
    margin-left: 8em;
  }
}
</style>