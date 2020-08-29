import { Injectable }  from '@angular/core'
@Injectable()

export class userData {
    public loadData(): string[]{
        return ['user1', 'user2', 'user3']
    }
}