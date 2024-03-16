import {TSurah} from "@/types/surah";
import {BASE_URL, QURAN_PARAMS} from "@/constants/Api";

class QuranChainer {
    private selectedSurah : number | null;
    private selectedAyah : number | null;
    constructor() {
        this.selectedSurah = null;
        this.selectedAyah = null;
    }

    surah(surahNumber : number) {
        this.selectedSurah = surahNumber;
        return this;
    }

    ayah(ayahNumber : number) {
        if (this.selectedSurah === null) {
            throw new Error('Call surah() method first');
        }
        this.selectedAyah = ayahNumber;
        // Do whatever you want with selectedSurah and selectedAyah
        console.log(`Selected Surah: ${this.selectedSurah}, Selected Ayah: ${this.selectedAyah}`);
        return this;
    }
    async fetch() {
        if (this.selectedSurah === null) {
            throw new Error('Call surah() method first');
        }
        if (this.selectedAyah === null) {
            throw new Error('Call ayah() method first');
        }
        // Do whatever you want with selectedSurah and selectedAyah
        console.log(`Selected Surah: ${this.selectedSurah}, Selected Ayah: ${this.selectedAyah}`);
        return fetch(BASE_URL + '/quran/verses/uthmani?' + QURAN_PARAMS.CHAPTER +'='+this.selectedSurah
            + '&' + QURAN_PARAMS.VERSE + '=' + this.selectedAyah)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('Error:', error);
            });


    }
}

export class QuranService {
    constructor() {

    }

    getQuran() {
        return new QuranChainer()
    }

    getQuranBySurah(surahNum :number) {
        return fetch(BASE_URL + '/quran/verses/uthmani?' + QURAN_PARAMS.CHAPTER +'='+surahNum)
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