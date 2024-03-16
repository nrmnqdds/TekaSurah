import {TSurah} from "@/types/surah";
import {BASE_URL} from "@/constants/Api";

export class QuranService {
    constructor() {

    }
    getQuran() {
        return fetch(BASE_URL + 'quran/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    getQuranBySurah(surah : TSurah) {
        return fetch(BASE_URL + surah.name + '/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    getQuranByAyah(surah:string, ayah:number) {
        return fetch(BASE_URL + surah + ':' + ayah + '/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    getQuranByJuz(juz:number) {
        return fetch(BASE_URL + juz + '/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    getQuranByPage(page : number) {
        return fetch(BASE_URL + page + '/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    getQuranByHizb(hizb:number) {
        return fetch(BASE_URL + hizb + '/en.asad')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }


}
export function useQuranService(){
    return new QuranService();
}