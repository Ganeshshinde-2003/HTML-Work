var bordersize
var err = 0
bordersize = prompt("select a table border size:"+"0"+"1"+"4"+"8")
switch(bordersize)
{
    case "0":document.write("<table>")
    break
    case "1":document.write("<table border ='1'>")
    break
    case "4":document.write("<table border ='4'>")
    break
    case "8":document.write("<table border ='8'>")
    break
    default:
    {
        document.write("Error","<br/>")
        err = 1
    }
}
if (err = 0)
{
    document.write("<caption>2012 NFL Divisional","Winners</caption>")
    document.write(
        "<table>",
        "<tr>",
        "<th/>",
        "<th> American Conference </th>",
        "<th> Natioanl Conference </th>",
        "</tr>",
        "<tr>",
        "<th> East</th>",
        "<td> New Englsnd Patriots </td>",
        "<td> Washington Redskins </td>",
        "</tr>",
        "</table>"
    )
}