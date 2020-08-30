import { Injectable }  from '@angular/core'
@Injectable()

export class deptData {
    public loadData(): string[]{
        return ['Dept-1', 'Dept-2', 'Dept-3', 'Dept-4']
    }
}