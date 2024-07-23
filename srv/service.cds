using db as s1 from '../db/schema';

service MyService {

    @odata.draft.enabled
    entity profile as projection on s1.profile;

}