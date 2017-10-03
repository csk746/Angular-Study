import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
    transform (array: Array<any>, sortType: string, keyName:string):Array<any> {

        if (!sortType) return array;

        var key = keyName;
        if (keyName === null) {
            var keyNames = Object.keys(array);
            key = keyNames[0].toLowerCase();
        }

        if (sortType === 'asc') {
            array.sort(function(a, b) {
                if(a[key] < b[key]) return -1;
                if(a[key] > b[key]) return 1;
                return 0;
            });
        } else if (sortType === 'desc') {
            array.sort(function(a, b) {
                if(a[key] < b[key]) return 1;
                if(a[key] > b[key]) return -1;
                return 0;
            });
        }

        return array;
    }
}