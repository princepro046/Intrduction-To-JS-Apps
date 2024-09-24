var choice = prompt("Welcome To My VS Code Area Calculator.\n Please enter your choice. \n1.Area Of Rectangle. \n2.Area of circle. \n3.Area Of Parallelogram. \n4.Area Of Triangle");
  if (choice == '1') {
         var n1 = prompt('Enter The Length')
         var n = prompt('Enter The Breadth :')
         var result = Number(n1)*Number(n)
         alert('The Area Is '+ result)
  }
  if (choice == '2') {
                        var n2 = prompt('Enter The radius')
                        var result = 3.14*Number(n2)
                        alert('The Area Is' + result)
  }
    if (choice == '3') {
                          var n3 = prompt('Enter The Height')
                          var n = prompt('Enter The Base')
                          var result = Number(n3)*Number(n)
                          alert('The Area Is' + result)
    }
    if (choice == '4') {
                         var n4 = prompt('Enter The Height')
                         var n = prompt('Enter The Base')
                         var result = Number(n4)*Number(n)
                         alert('The Area Is' + result)
    