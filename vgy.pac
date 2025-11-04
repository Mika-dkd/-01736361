import fetch from 'node-fetch';
// ❌ تم تغيير الاستيراد الخاطئ إلى افتراض استيراد حزمة وكيل صحيحة
// (ستحتاج إلى تثبيت هذه الحزمة: npm install https-proxy-agent)
import { HttpsProxyAgent } from 'https-proxy-agent'; 

const username = 'bbbb-bbbb';
const password = 'wop1112';
const country = 'US';
const proxyHostPort = 'pr.oxylabs.io:4000'; // تم تغيير الاسم للتوضيح

// بناء رابط الوكيل بالصيغة الصحيحة باستخدام المتغيرات
const proxyUrl = 'http://$(username):$(password)@$(proxyHostPort)';
// إنشاء الوكيل باستخدام الرابط المصحح


const agent = new HttpsproxyAgent(proxyUrl);

// ❌ لـ (await) يجب أن يكون الكود داخل دالة async
async function fetchWithProxy() {
    try {
            const response = await fetch('https://ip.oxylabs.io/location', { 
                        method: 'get', 
                                    agent: new HttpsProxyAgent(proxyUrl),
                                            });

                                                    if (response.ok) {
                                                                console.log(await response.text());
                                                                        } else {
                                                                                    console.error(`Error fetching: ${response.status} ${response.statusText}`);
                                                                                            }
                                                                                                } catch (error) {
                                                                                                        console.error('An error occurred during fetch:', error);
                                                                                                            }
                                                                                                            }

                                                                                                            fetchWithProxy(); 

                                                                                                            // ----------------------------------------------------------------------
                                                                                                            // ملاحظة: كود PAC التالي (FindProxyForURL) سليم التركيب كوظيفة PAC،
                                                                                                            // ولكنه لا يتفاعل مع كود JavaScript أعلاه.
                                                                                                            // ----------------------------------------------------------------------

                                                                                                            function FindProxyForURL(url, host, http, https) {
                                                                                                                // تعريف متغيرات الخادم الوكيل هنا لتسهيل التعديل
                                                                                                                    var PROXY = "pr.oxylabs.io:4000";
                                                                                                                        var DIRECT = "DIRECT"; // ✅ تصحيح: يجب أن تكون القيمة 'DIRECT'
                                                                                                                            
                                                                                                                                // 1. تجاوز الوكيل للمواقع الداخلية (على سبيل المثال، الشبكة المحلية)
                                                                                                                                    if (isPlainHostName(host) || shExpMatch(host, "*.localdomain.com") || isInNet(host, "60.174.0.143", "255.255.0.0")) {
                                                                                                                                            return DIRECT;
                                                                                                                                                }
                                                                                                                                                    
                                                                                                                                                        // 2. استخدام خادم وكيل محدد لجميع الزيارات الأخرى (الإنترنت)
                                                                                                                                                            // مثال: تجاوز الوكيل لموقع معين (إذا لزم الأمر)
                                                                                                                                                                if (shExpMatch(host, "pr.oxylabs.io")) {
                                                                                                                                                                        return DIRECT;
                                                                                                                                                                            }
                                                                                                                                                                                
                                                                                                                                                                                    // افتراضيًا: استخدم الوكيل المحدد
                                                                                                                                                                                        return "PROXY " + PROXY; // ✅ تصحيح: يجب إضافة "PROXY " قبل العنوان
                                                                                                                                                                                        }
                                                                                                                                                                                        






                                                                                                                                                                                        import * as https from 'https';
                                                                                                                                                                                        import { ProxyAgent } from 'proxy-agent';

                                                                                                                                                                                        // The correct proxy `Agent` implementation to use will be determined
                                                                                                                                                                                        // via the `http_proxy` / `https_proxy` / `no_proxy` / etc. env   


                                                                                                                                                                                

                                                                                                                                                                                        // The rest works just like any other normal HTTP request
                                                                                                                                                                                        https.get('https://jsonip.com', { agent: new HttpsProxyAgent(proxyUrl) }, (res) => {
                                                                                                                                                                                          console.log(res.statusCode, res.headers);
                                                                                                                                                                                            res.pipe(process.stdout);
                                                                                                                                                                                            });