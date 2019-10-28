var notData = {};
var wlcmEnabled = 0;
var macros = {"manifest":"/manifest.json","sw":"/static/lemnisk/SDKWorker.js","customOptinStatus":null,"migdomain":"/static/lemnisk/","hasMigration":true};
var __vizpush = __vizpush || {
  IframeEle: null,
  ContainerHtmlId: 'viz-push-container',
  version: '2',
  advid: 'VIZVRM5982',
  target: 'mu-pl.lemnisk.co',
  domain: macros.domain,
  migDomain: macros.migdomain,
  hasMigration: macros.hasMigration,
  isCOActive: macros.customOptinStatus,
  dailyCookie: '_vwpnsent',
  stateCookie: '_vwpnstate',
  fcmMigCookie: '_vwpnfcm',
  pushSuppCookie: '_vwpnsupp',
  fpc: '_vz',
  prevState: '',
  fcmMigState: '',
  vapidPublicKey: 'BCvAkZ5AxSA-AvOuH2kYCStnhsllkZU_DAOC2O5G29qzYttp56HpsnxEx3QnuNOAvUKfDfkh2TP6gnNqugYOj_Q' ,
  manifestLoc: macros && macros.manifest ? macros.manifest : '/manifest.json',
  swLoc: macros && macros.sw ? macros.sw : '/static/lemnisk/SDKWorker.js',
  mobileOnly: macros.mobileOnly ? macros.mobileOnly : 0,
  timeout: macros.timeout ? macros.timeout : 120000,
  first: false,
  ctaUrls: ['lp1', 'lp2'],
  uuid: "",
  cont: '<style> .vizury-notification { display: block; overflow: hidden; border: 0px; position: fixed; z-index: 199999980;}</style> <iframe id = "http-push" class="vizury-notification" width="100%" height="100%"></iframe>',
  iframeContent: '',
  getCookie: function(cookieId) {
    var cookies = document.cookie;
    if (!cookieId) {
      return '';
    }
    var cookieArray = cookies.split(';');
    for (var key in cookieArray) {
      if (cookieArray.hasOwnProperty(key)) {
        var matchArray = cookieArray[key].match(/\s*(.*)=(.*)/);
        if (matchArray) {
          if (matchArray[1] === cookieId && matchArray[2]) {
            return decodeURIComponent(matchArray[2]);
          }
        }
      }
    }
    return '';
  },
  setCookie: function(c_name, value, exdays, domain) {
    var domainStr = domain ? domain : __vizpush.domain;
    if (exdays && exdays > 0) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = encodeURIComponent(value) + '; expires=' + exdate.toUTCString() + '; path=/';
      if (domainStr) {
        c_value +=  '; domain=' + domainStr;
      }
      document.cookie = c_name + '=' + c_value;
    } else {
      document.cookie = c_name + '=' + encodeURIComponent(value);
    }
  },
  createDivElement: function() {
    var tempDiv = document.createElement('div');
    tempDiv.id = __vizpush.ContainerHtmlId;
    document.body.appendChild(tempDiv);
    __vizpush.SetDivContent();
  },
  close: function() {
    var customOptin = document.getElementById('http-push');
    if (customOptin) {
      customOptin.style.display = 'none';
    }
  },
  showOptin: function() {
    if (!__vizpush.mobileOnly || (__vizpush.mobileOnly 
      && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      return true;
    }
    return false;
  },
  SetDivContent: function(con) {
    var div = document.getElementById(__vizpush.ContainerHtmlId);
    div.innerHTML = __vizpush.cont;
    __vizpush.SetIframeContent(__vizpush.iframeContent);
    __vizpush.IdentifyEvent();
  },
  SetIframeContent: function(con) {
    var doc = document.getElementById('http-push').contentWindow.document;
    doc.open();
    doc.write('<!DOCTYPE html>');
    doc.write(con);
    doc.close();
    __vizpush.IframeEle = parent.document.getElementById('http-push');
  },
  transAnimationTopAndBottom: function(element, position, startvalue, endvalue) {
    var interval = setInterval(function() {
      element.style[position] = startvalue + 'px';
      if (endvalue < 0) {
        startvalue -= 2;
        if (startvalue < endvalue) {
          element.style[position] = endvalue + 'px';
          clearInterval(interval);
        }
      } else {
        startvalue += 2;
        if (startvalue > endvalue) {
          element.style[position] = endvalue + 'px';
          clearInterval(interval);
        }
      }
    }, 1);
  },
  triggerNotiBottom: function(ele, startvalue) {
    __vizpush.transAnimationTopAndBottom(ele, 'bottom', startvalue, 0);
  },
  triggerNotiTop: function(ele, startvalue) {
    __vizpush.transAnimationTopAndBottom(ele, 'top', startvalue, 0);
  },
  IdentifyEvent: function() {
    __vizpush.IframeEle.style.top = '-136px';
    setTimeout(function() {
      __vizpush.triggerNotiTop(__vizpush.IframeEle, parseInt('-136px'));
    }, 1);
  },
  hasPushSupport: function() {
    if (/Chrome\/([0-9]+)\./.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !/OPR\/([0-9]+)\./.test(navigator.userAgent)) {
      var ver = navigator.userAgent.match(/Chrome\/([0-9]+)\./)[1];
      if (ver >= 50) {
        return true;
      }
    } else if (/Firefox\/([0-9]+)\./.test(navigator.userAgent)) {
      var ver = navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1];
      if (ver >= 46) {
        return true;
      }
    } else if (/OPR\/([0-9]+)\./.test(navigator.userAgent)) {
      var ver = navigator.userAgent.match(/OPR\/([0-9]+)\./)[1];
      if (ver >= 48) {
        return true;
      }
    }
    return false;
  },
  insertManifest: function() {
    var headTag = document.getElementsByTagName('head')[0];
    var ln = document.createElement('link');
    ln.rel = 'manifest';
    ln.href = __vizpush.manifestLoc;
    headTag.appendChild(ln);
  },
  logState: function(action, isMetricLog, type) {
    var notify = '';
    if (__vizpush.prevState !== action) {
      __vizpush.setCookie(__vizpush.stateCookie, action, 1);
      var origin = encodeURIComponent(document.URL);
      var query_params = '?version=' + __vizpush.version + '&advid=' + __vizpush.advid + '&action=' + action +'&origin=' +origin;
      if (!isMetricLog) {
        notify = 'https://' + __vizpush.target + '/analyze/subMap' + query_params;
      } else {
        if (type === 'custom') {
          query_params += '&type=HTTPSCO';
        }
        notify = 'https://' + __vizpush.target + '/analyze/optinInfo' + query_params;
      }
      if (__vizpush.first) {
        notify = notify + '&useraction=1';
      }
      fetch(notify, {
        credentials: 'include'
      })
    }
  },
  logError: function(err) {
    var message = encodeURIComponent(err);
    var notify = 'https://' + __vizpush.target + '/analyze/error?message=' + message + '&advid=' + __vizpush.advid + '&version=' + __vizpush.version;
    fetch(notify, {
      credentials: 'include'
    })
  },
  logEvent: function(engid, tag, action, ts) {
    var notify = 'https://' + __vizpush.target + '/analyze/notification?' + '&version=' + __vizpush.version + '&engid=' + engid + '&action=' + action + '&tag=' + tag + '&ts=' + ts + '&advid=' + __vizpush.advid;
    fetch(notify, {
      credentials: 'include'
    })
  },
  dismissNotification: function(registration, data) {
    setTimeout(function() {
      registration.getNotifications().then(function(nots) {
        var epoch = (new Date).getTime();
        for (var i = 0; i < nots.length; i++) {
          if (nots[i].data.uuid === __vizpush.uuid) { // check if the uuid is matching
            nots[i].close();
            logEvent(data.engid, data.uuid, 'DISMISS', epoch);
          }
        }
      });
    }, __vizpush.timeout);
  },
  sendWlPush : function(reg) {
    var epoch = (new Date).getTime();
    __vizpush.uuid = __vizpush.getUuid();
    var options = {
      body: notData.body,
      tag: "wln",
      icon: notData.icon,
      requireInteraction: true,
      data: {
        url: notData.lp,
        ts: epoch,
        engid: -1,
        uuid: __vizpush.uuid,
        orchestrated: 0
      }
    };
    if (notData.image && notData.image.enabled) {
      options.image = notData.image.url;
    }
    if (notData.button && notData.button.enabled) {
      var cta = notData.button.cta;
      options.actions = cta;
      for (var i = 1; i <= options.actions.length; i++) {
        options.actions[i - 1].action = "cta" + i;
        options.data[__vizpush.ctaUrls[i - 1]] = options.actions[i - 1].lp;
      }
    }
    reg.showNotification(notData.title, options).then(function() {}).then(function() {
      __vizpush.logEvent(options.data.engid, options.data.uuid, 'PUSH', epoch);
      __vizpush.dismissNotification(reg, options.data);
    }).catch(function(err) {
      __vizpush.logError(err.message);
    });
  },
  S4: function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  getUuid: function() {
    return (__vizpush.S4() + __vizpush.S4() + '-' + __vizpush.S4() + '-4' + __vizpush.S4().substr(0, 3) + '-' + __vizpush.S4() + '-' + __vizpush.S4() + __vizpush.S4() + __vizpush.S4()).toLowerCase();
  },
  migrate: function() {
	var isPresent = false;
    navigator.serviceWorker.getRegistrations()
      .then(function(r) {
        for (var i = 0; i < r.length; i++) {
          if (r[i].scope.indexOf(__vizpush.migDomain) > -1) {
            __vizpush.first = true;
	          isPresent = true;
            r[i].unregister().then(function(flag) {
              if (flag === true) {
                __vizpush.register();
              }
            });
            break;
          }
        }
	      if (!isPresent) {
          __vizpush.register();
        }
        __vizpush.setCookie(__vizpush.fcmMigCookie, 1, 1460);
      }).catch(function(err) {
        __vizpush.logError(err.message);
      });
  },
  register: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(__vizpush.swLoc).then(function(reg) {
        if (/\/\w+\//.test(__vizpush.swLoc)) {
          var serviceWorker;
          if (reg.installing) {
            serviceWorker = reg.installing;
          } else if (reg.waiting) {
            serviceWorker = reg.waiting;
          } else if (reg.active) {
            serviceWorker = reg.active;
          }
          if (serviceWorker) {
            if (serviceWorker.state == 'activated') {
              __vizpush.genSubscription(reg);
            }
            serviceWorker.addEventListener('statechange', function(e) {
              if (e.target.state == 'activated') {
                __vizpush.genSubscription(reg);
              }
            });
          }
        } else {
          navigator.serviceWorker.ready
            .then(function() {
              __vizpush.genSubscription(reg);
            }).catch(function(err) {
              __vizpush.logState('NS');
              __vizpush.logError(err.message);
            });
        }
      }).catch(function(err) {
        __vizpush.logError(err.message);
      });
    } else {
      __vizpush.logState('NS');
    }
  },
  urlBase64ToUint8Array: function(base64String) {
	    const padding = '='.repeat((4 - base64String.length % 4) % 4);
	    const base64 = (base64String + padding)
	      .replace(/\-/g, '+')
	      .replace(/_/g, '/');

	    const rawData = window.atob(base64);
	    const outputArray = new Uint8Array(rawData.length);

	    for (let i = 0; i < rawData.length; ++i) {
	      outputArray[i] = rawData.charCodeAt(i);
	    }
	    return outputArray;
	  },
  genSubscription: function(reg) {
    reg.pushManager.getSubscription().then(function(subscription) {
      if (Notification.permission == 'default') {
        __vizpush.first = true;
        __vizpush.logState('OP', 1, 'native');
      }
      const convertedVapidKey = __vizpush.urlBase64ToUint8Array(__vizpush.vapidPublicKey);
      reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
      }).then(function(subscription) {
        var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
        var key = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
        var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
        var authSecret = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : '';
        var endpoint = subscription.endpoint;
        endpoint = encodeURIComponent(endpoint);
        key = encodeURIComponent(key);
        authSecret = encodeURIComponent(authSecret);
        if (endpoint && key && authSecret) {
          if (__vizpush.prevState !== 'AL') {
            __vizpush.setCookie(__vizpush.stateCookie, 'AL', 1);
            var origin = encodeURIComponent(document.URL);
            var notify = 'https://' + __vizpush.target + '/analyze/subMap?subid=' + endpoint + '&auth=' + authSecret + '&key=' + key + '&version=' + __vizpush.version + '&advid=' + __vizpush.advid + '&action=AL' +'&origin=' +origin + '&ck=' + __vizpush.getCookie(__vizpush.fpc);
            if (__vizpush.first) {
              notify = notify + '&useraction=1';
              if (wlcmEnabled) {
                __vizpush.sendWlPush(reg);
              }
            }
            fetch(notify, {
              credentials: 'include'
            })
          }
        } else {
          __vizpush.logState('NS');
        }
      }).catch(function(err) {
	if (Notification.permission === 'denied') {
          __vizpush.logState('BL');
        } else if (Notification.permission === 'default' && /denied/.test(err)) {
          __vizpush.setCookie(__vizpush.dailyCookie, 1, 1);
          __vizpush.logState('CL');
        } else {
          __vizpush.logState('NS');
        }
        __vizpush.logError(err.message);
      });
    }).catch(function(err) {
      __vizpush.logState('NS');
      __vizpush.logError(err.message);
    });
  },
  later: function() {
    __vizpush.close();
    __vizpush.setCookie(__vizpush.dailyCookie, 1, 1);
    __vizpush.logState('BL', 1, 'custom');
  },
  cross: function() {
    __vizpush.close();
    __vizpush.setCookie(__vizpush.dailyCookie, 1, 1);
    __vizpush.logState('CL', 1, 'custom');
  },
  allow: function(isHeartBeat) {
    if (!isHeartBeat) {
      __vizpush.close();
      __vizpush.logState('AL', 1, 'custom');
    }
    if (!__vizpush.fcmMigState) {
        __vizpush.migrate();
      }
      else {
        __vizpush.register();
      }
  },
  init: function() {
    var dailyCookie = __vizpush.getCookie(__vizpush.dailyCookie);
    if (!dailyCookie && document.location.protocol === 'https:' && __vizpush.showOptin()) {
      __vizpush.insertManifest();
      __vizpush.prevState = __vizpush.getCookie(__vizpush.stateCookie);
      __vizpush.migState = __vizpush.getCookie(__vizpush.migCookie);
      __vizpush.fcmMigState = __vizpush.getCookie(__vizpush.fcmMigCookie);
      var isCallInitiated = false;
      document.onreadystatechange = function() {
        if (/interactive|complete/i.test(document.readyState) && !isCallInitiated) {
          isCallInitiated = true;
          if (Notification.permission == 'default' && __vizpush.isCOActive) {
            if (__vizpush.hasPushSupport()) {
              __vizpush.prevState = '';
              __vizpush.createDivElement();
              __vizpush.logState('OP', 1, 'custom');
            } else {
              if (!__vizpush.getCookie(__vizpush.pushSuppCookie)) {
                __vizpush.setCookie(__vizpush.pushSuppCookie, 1, 365);
                __vizpush.logState('NS');
              }
            }
          } else {
            if (!__vizpush.isCOActive && Notification.permission == 'default') {
              __vizpush.prevState = '';
            }
            __vizpush.allow(true);
          }
        }
      }
    }
  }
};
__vizpush.init();
