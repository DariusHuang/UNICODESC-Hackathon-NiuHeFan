Page({

  data: {
    // From common.js
    Game: {
      ctx:{},
      tileAtlas:{}
    },
    Keyboard:{},
    images: {},
    local_canvas:{},
    map: {
      // From No scroll.js
      cols: 12,
      rows: 12,
      tsize: 64,
      tiles: [
          1, 3, 3, 3, 1, 1, 3, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 2, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 2, 1, 1, 1, 1,
          1, 1, 1, 1, 2, 1, 1, 1,
          1, 1, 1, 1, 2, 1, 1, 1,
          1, 1, 1, 1, 2, 1, 1, 1
      ],
    }
   
  },
  // From no-scroll.js
  map_getTile: function (col, row) {
    console.log("map_getTile is called")
      return this.data.map.tiles[row * this.data.map.cols + col];
  },
  loadAsync: function (callback) {
    var that = this;
    that.loadImageAsync('tiles', '../../assets/tiles.png', function(){
      that.loadImageAsync('character', '../../assets/character.png', callback);
    });
  },
  // From common.js
  // Note: The process of loading is asynchronous
  loadImageAsync: function (key, src, callback) {
    var that = this
    var img = that.canvas.createImage();
    img.onload = function(){
      that.data.images[key] = img;
      callback(img);
      console.log("onload is called", src, img)
    }
    img.src = src;
    /*var img = wx.getImageInfo({
      src: src,
      success: (result) => {
        that.data.images[key] = result;
        callback(result);
        console.log("loadImage is called", src, result)
      },
      fail: (res) => {
        console.log('Could not load image: ' + src);
      },
      complete: (res) => {},
    })*/
  },
  init: function () {
    this.data.Game.tileAtlas = this.getImage('tiles');
  },
  update: function (delta) {
  },
  render: function () {
    var that = this
    for (var c = 0; c < that.data.map.cols; c++) {
        for (var r = 0; r < that.data.map.rows; r++) {
            var tile = that.map_getTile(c, r);
            if (tile !== 0) { // 0 => empty tile
              console.log(that.data.Game.tileAtlas);
                this.ctx.drawImage(
                  that.data.Game.tileAtlas, // image
                    (tile - 1) * that.data.map.tsize, // source x
                    0, // source y
                    that.data.map.tsize, // source width
                    that.data.map.tsize, // source height
                    c * that.data.map.tsize,  // target x
                    r * that.data.map.tsize, // target y
                    that.data.map.tsize, // target width
                    that.data.map.tsize // target height
                );
            }
        }
    }
},
  getImage: function (key) {
    var that = this
    console.log("getImage is called")
    return (key in that.data.images) ? that.data.images[key] : null;
  },
  tick: function (elapsed) {
    var that = this
    that.data.local_canvas.requestAnimationFrame(this.tick);
    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);
    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed
    this.update(delta);
    this.render();
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  1. Get canvas context
    var that = this
    const query = wx.createSelectorQuery()
    query.select('#shareCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        that.setData({
          local_canvas:canvas
        })
        console.log(that.data.local_canvas);
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr);
        ctx.fillRect(0, 0, 100, 150);
        that.run(canvas, ctx);
      })
      // 开始跑canvas
  },
  run: function (canvas, context) {
    var that = this;
    this.ctx = context;
    this.canvas = canvas;
    this._previousElapsed = 0;

    this.loadAsync(function(){
      that.init();
      that.tick();
      //that.data.local_canvas.requestAnimationFrame(that.tick);
    });

   /* var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        that.data.local_canvas.requestAnimationFrame(this.tick);
    }.bind(this));*/
  },
  sth:function(){
   console.log("2")
  },
  click:function(){
    sth()
    // run(wx.createCanvasContext('shareCanvas'))
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})