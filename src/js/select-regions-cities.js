import arrRegions from './list-regions.js';
import arrCities from './list-cities.js';
import $ from 'jquery';

const selectRegionsCities = () => {
  // list of regions and cities for quiz START
  let result = document.getElementById('region-q');
  let opts = '';
  for (var key in arrRegions) {
    if (!arrRegions.hasOwnProperty(key)) continue;
    var item = arrRegions[key];
    opts += "<option class='options' value='" + item.id + "'>" + item.name + '</option>';
  }
  opts += '';
  result.innerHTML = opts;

  // input and datalist if we select the city from the database list-cities

  // function rend() {
  //   const selectCity = document.getElementById('city-q');
  //   let opts2 = '';
  //   for (var key in arrCities) {
  //     if ('22' === arrCities[key].Region_id) {
  //       opts2 += "<option class='options' value='" + arrCities[key].Name + "'>" + arrCities[key].Name + '</option>';
  //     }
  //   }
  //   opts2 += '';
  //   selectCity.innerHTML = opts2;
  // }
  // rend();

  // $('#region-q').on('change', function () {
  //   const selectRegion = $('#region-q option:selected').val();
  //   const selectCity = document.getElementById('city-q');
  //   let opts3 = '';
  //   for (var key in arrCities) {
  //     if (selectRegion === arrCities[key].Region_id) {
  //       opts3 += "<option class='options' value='" + arrCities[key].Name + "'>" + arrCities[key].Name + '</option>';
  //     }
  //   }
  //   opts3 += '';
  //   selectCity.innerHTML = opts3;
  // });
};
// list of regions and cities for quiz END

export default selectRegionsCities;
