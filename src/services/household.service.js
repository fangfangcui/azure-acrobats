
import http from '../http-common';

const API_URL = 'http://localhost:8080/api/households/';

class HouseholdService {

  getAllHouseholds(){
    return http.get(API_URL);
  }

}

export default new HouseholdService();