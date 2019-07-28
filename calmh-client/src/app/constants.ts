import { SocketIoConfig } from 'ngx-socket-io';

export class Constants {
    public static APP = {
        name: 'CALMH',
        description: 'Collaboration Assessment and Learning for Mental Health.'
    };

    public static LOGIN_URL = 'login';
    public static LOGOUT_URL = 'logout';
    public static UNAUTHENTICATED = 'Unauthenticated';

    public static HOMEPAGE_ADMIN = 'admin-home';
    public static HOMEPAGE_VOLUNTEER = 'volunteer-home';
    public static HOMEPAGE_USER = 'user-home';

    public static HEART_RATE = 'heart_rate';

    public static SOCKET_IO_CONFIG: SocketIoConfig = { url: 'http://calmh-server.mybluemix.net', options: {} };
    public static CLOUDANT_SERVER = 'http://calmh-server.mybluemix.net/rest/';

    public static url(url: string) {
        return '/' + url;
    }

}
