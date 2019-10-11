import { CloudfrontService } from './cloudfront.service';

describe('Cloudfront service', () => {

  let service: CloudfrontService;
  beforeEach(() => {
    service = new CloudfrontService();
  });

  describe('getJSON', () => {
    test('should return successfully', async () => {
      // @ts-ignore
      const actual = await service.getJSON();
      return expect(actual.prefixes[0].ip_prefix).toBeTruthy();
    });
  });

  describe('getIpRange', () => {
    test('should return successfully', async () => {
      const actual = await service.getIpRange();
      return expect(actual[0]).toBeTruthy();
    });
  });
});
