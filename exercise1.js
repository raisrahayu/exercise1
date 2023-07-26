console.log("Rais Rahayu")


// Luas persegi panjang
var panjang = 12
var lebar = 6

var luasPersegiPanjang = panjang * lebar

console.log(`Luas suatu persegi panjang adalah ${luasPersegiPanjang}`)

// Keliling persegi panjang
var kelilingPersegiPanjang = panjang * 2 + lebar * 2
console.log(`Keliling suatu persegi panjang adalah ${kelilingPersegiPanjang}`)

// Diameter Lingkaran

var jariJari = 10
var diameter = jariJari * 2

console.log(`Jari jari suatu lingkaran adalah ${diameter}`)

// Keliling Lingkaran
// keliling lingkaran = 2*PI*r
var kelilingLingkaran = 2 * Math.PI * jariJari

console.log(`Keliling suatu lingkaran adalah ${kelilingLingkaran}`)

// Luas Lingkaran
// PI*r*r

var luasLingkaran = Math.PI * jariJari * jariJari

console.log(`Luas suatu lingkaran adalah ${luasLingkaran}`)

// Mencari Besar sudut segitiga
// Total sudut segitiga 180 degree
// Diketahui :
var sudut1 = 60
var sudut2 = 60
var sudut3 = 180 - sudut1 - sudut2

console.log(sudut3 + " degree ")

// Calculate days between two dates

var date1 = new Date('12/02/2023')
var date2 = new Date('12/01/2023')

var perbedaan = date1.getTime() - date2.getTime()
var perbedaanHari = Math.ceil(perbedaan / (1000 * 3600 * 24))

console.log(perbedaanHari + " Hari ")

// Convert days to years, months and days.

function daysToYearsMonthsDays(days) {
    const years = Math.floor(days / 365);
    days -= years * 365;
  
    const months = Math.floor(days / 30);
    days -= months * 30;
  
    return {
      years: years,
      months: months,
      days: days,
    };
  }

const totalDays = 459;
const result = daysToYearsMonthsDays(totalDays);

console.log(`${totalDays} hari adalah ${result.years} tahun, ${result.months} bulan, dan ${result.days} hari.`);

