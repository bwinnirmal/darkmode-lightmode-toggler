<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <style>
      body{
        transition: all 1s;
      }
      .main{
        text-align: center;
      }
      .mode-toggle{
        width: 30px;
        height: 30px;
        position: relative;
        left: 50%;
        cursor: pointer;
      }
      .sun{
        background-color: yellow;
        box-shadow: 2px 0px 0px 1px #D19C29;
        border-radius:50%;
        width: 26px;
        height: 26px;
        transition: 2s;
      }
      .moon{
        background-color: transparent;
        box-shadow: -6px 1px 0 3px #275e8e;
        border-left:4px solid #27476D;
        border-radius:50%;
        width: 20px;
        height: 20px;
        margin-left:8px;
        margin-top:0px;
        transition: 2s;
      }

      .mode-toggle::after{
        content: "<-- Switch Mode";
        margin-left: 30px;
        position: absolute;
        top: 2px;
        width: 100vw;
      }
      
    </style>
  </head>
  <body>
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div class="container">
      <div class="mode-toggle shadow p-1 rounded-3 m-1">
        <div id="toggleButton" class="moon"> </div>
      </div>
    </div>
    <div class="container">
      <div class="main mt-5 shadow rounded-3 p-3">
        <h1 class="fw-bolder">
          Night/Day Mode Toggler
        </h1>
        <p class="fs-5">Click On Top Sun Icon To Switch To Light Mode.</p>
        <p class="fs-5">Click On Top Moon Icon To Switch To Dark Mode.</p>
        <h1 class="fw-bolder">Current Mode:- <span id="currentMode">Light</span></h1>
      </div>
    </div>



    <!-- my js  -->
    <script src="./app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>
