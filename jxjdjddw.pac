import fetch from 'node-fetch';
import createHttpsProxyAgent from 'https-proxy-agent';

const username = 'bbbb-bbbb';
const password = 'wop1112';
const country = 'US';
const proxy = `pr.oxylabs.io:4000`;

const agent = createHttpsProxyAgent(`http://${'bbbb'}-cc-${'bbbb'}:${'wop1112'}@${'pr.oxylabs.io:4000'}`);

const response = await fetch('https://ip.oxylabs.io/location', {
    method: 'get',
        agent: agent,
        });

        console.log(await response.text());













        function FindProxyForURL(url, host) {
                  // تعريف متغيرات الخادم الوكيل هنا لتسهيل التعديل
                          var PROXY = "pr.oxylabs.io:4000";
                                    var DIRECT = "150.228.35.56";

                                                // 1. تجاوز الوكيل للمواقع الداخلية (على سبيل المثال، الشبكة المحلية)
                                                              // شروط مثل: isPlainHostName(), shExpMatch(), isInNet()
                                                                              if (isPlainHostName(host) || 
                                                                                                    shExpMatch(host, "*.localdomain.com","*.papi.club.gpubgm.com","*.api.club.gpubgm.com","*.ip.oxylabs.io/location") || 
                                                                                                                                isInNet(host, "150.228.35.56", "255.255.0.0")) {
                                                                                                                                                                return DIRECT;
                                                                                                                                                                                                  }

                                                                                                                                                                                                                                      // 2. استخدام خادم وكيل محدد لجميع الزيارات الأخرى (الإنترنت)
                                                                                                                                                                                                                                                                            // يمكنك إضافة منطق أكثر تعقيدًا هنا (مثل التوجيه إلى وكلاء مختلفين بناءً على URL أو الوقت)
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                             // مثال: تجاوز الوكيل لموقع معين (إذا لزم الأمر)
                                                                                                                                                                                                                                                                                                                                                                                                          if (shExpMatch(host, "pr.oxylabs.io")) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                            return DIRECT;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      // افتراضيًا: استخدم الوكيل المحدد
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              return PROXY;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        