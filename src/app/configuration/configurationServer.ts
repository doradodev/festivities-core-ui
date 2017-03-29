import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationServer {
    public Server: string = 'http://localhost:8081/';
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}