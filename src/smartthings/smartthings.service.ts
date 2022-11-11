import { lastValueFrom } from 'rxjs'
import { HttpService } from 'nestjs-undici'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class SmartthingsService {
  constructor (
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  public async getDevices (): Promise<any> {
    const token = this.configService.get<string>('SMARTTHIGNS_ACCESS_TOKEN', '')
    const result = this.httpService.request('https://api.smartthings.com/v1/devices', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const response = await lastValueFrom(result)
    return response.body
  }
}
