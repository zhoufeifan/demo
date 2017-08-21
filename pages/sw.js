self.addEventListener('install', function(event) {
    event.waitUntil(updateStaticCache());
});

var version = "v1";

function updateStaticCache() {
    return caches.open(version)
      .then(function (cache) {
        return cache.addAll([
          'assets/images/timg.jpg',
          'assets/nima.js',
          'assets/nima.html'
        ]);
      });
  };

  this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v1'];
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          let responseClone = response.clone();
          
          caches.open(version).then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/assets/nima.html');
        });
      }
    }));
  });