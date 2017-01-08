/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }
    /* eslint-disable */
    
    class AddDialog {
        
        constructor(storage, chart){
        
            this._storage = storage;
            this._chart = chart;
            
            this._dialog = document.getElementById('add-dialog');
        
            this._initButtons();
            this._initTemperatureInput();
            this._initDateDialog();
            this._initTimeDialog();
    
            this._resetForm();
        }
        
        show(){
            this._dialog.classList.remove('hidden');
            this._resetForm();
        }
        
        hide(){
            this._dialog.classList.add('hidden');
            this._resetForm();
        }
        
        _resetForm(){
            this._selectedDate = this._selectedTime = moment();
            
            this._dateLabel.textContent = this._selectedDate.format('DD.MM.YYYY');
            this._timeLabel.textContent = this._selectedTime.format('h:mm');
            
            this._temperature.value = 36.6;
        }
        
        _initButtons() {
            const closeButton = document.getElementById('close');
            closeButton.addEventListener('click', ()=>this._onClose());
            
            const applyButton = document.getElementById('apply');
            applyButton.addEventListener('click', ()=>this._onApply());
        }
        
        _onClose(){
            this.hide();
        }
        
        _onApply(){

            let temperature = this._getTemperature();
    
            if (!temperature)
                return;
            
            let time = moment()
                .set('year', this._selectedDate.get('year'))
                .set('month', this._selectedDate.get('month'))
                .set('date', this._selectedDate.get('date'))
                .set('hour', this._selectedTime.get('hour'))
                .set('minute', this._selectedTime.get('minute'));
    
            let data = {
                temperature : temperature,
                time: time.format()
            };
    
            this._storage.saveRecord(data);
            
            const records = this._storage.getRecords();
            this._chart.drawChart(records);
            
            this.hide();
        }
    
        _getTemperature(){
            return this._temperature.value;
        }
        
        _initTemperatureInput(){
            this._temperature = document.getElementById('temperature');
        }
        
        _initDateDialog() {
            const dateDialog = new mdDateTimePicker.default({ type: 'date' });
            const dateButton = document.querySelector('#date button');
            dateButton.addEventListener('click', function(){
                dateDialog.toggle();
            });
            
            this._dateLabel = document.querySelector('#date span');
            dateDialog.trigger = this._dateLabel;
    
            this._dateLabel.addEventListener('onOk', () => {
                this._dateLabel.textContent = dateDialog.time.format('DD.MM.YYYY');
                this._selectedDate = dateDialog.time;
            });
        }
        
        _initTimeDialog() {
            const timeDialog = new mdDateTimePicker.default({ type: 'time' });
            const timeButton = document.querySelector('#time button');
            timeButton.addEventListener('click', function () {
                timeDialog.toggle();
            });
            
            this._timeLabel = document.querySelector('#time span');
            timeDialog.trigger = this._timeLabel;
            this._timeLabel.addEventListener('onOk', () => {
                this._timeLabel.textContent = timeDialog.time.format('h:mm');
                this._selectedTime = timeDialog.time;
            });
        }
    }
    
    class Storage {
        
        constructor(){
            this._key = 'data';
        }
        
        getRecords() {
            const data = window.localStorage.getItem(this._key);
    
            let records = [];
    
            if (data)
                records = JSON.parse(data);
            
            return records;
        }
        
        saveRecord(record){
            const records = this.getRecords();
            records.push(record);
            
            window.localStorage.setItem(this._key, JSON.stringify(records));
        }
        
        clear(){
            window.localStorage.removeItem(this._key);
        }
    }
    
    class ChartComponent {
        constructor(storage) {

            this._ctx = document.getElementById('temperature-chart');
            const records = storage.getRecords();
            this.drawChart(records);
        }
        
        drawChart(records){
    
            let data = records
            .map(item => {
                return { y: item.temperature, x: item.time };
            })
            .sort((item1, item2) => {
                if (item1.x > item2.x) return 1;
                if (item1.x < item2.x) return -1;
                return 0;
            });
    
            this._chart = new Chart(this._ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        data: data,
                        fill: false,
                        cubicInterpolationMode: 'monotone',
                        borderColor: 'rgb(255, 126, 70)',
                        pointBorderColor: 'rgb(255,215,64)',
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                displayFormats: {
                                    quarter: 'MMM YYYY hh:mm'
                                }
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 42,
                                min: 35
                            }
                        }]
                    }
                }
            });
        }
    }
    
    init();
    
    function init() {
        
        const storage = new Storage();
        const chart = new ChartComponent(storage);
        const addDialog = new AddDialog(storage, chart);
        
        const showDialogButton = document.getElementById('add');
        showDialogButton.addEventListener('click', () => {
            addDialog.show();
        });
        
        const clearButton = document.getElementById('clear-button');
        clearButton.addEventListener('click', () => {
            storage.clear();
            chart.drawChart([]);
        });
    }

    /* eslint-enable */
})();
