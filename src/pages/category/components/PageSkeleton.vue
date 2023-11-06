<template name="skeleton">
    <view class="sk-container">
      <view class="viewport">
        <view class="search">
          <view class="input">
            <text class="icon-search sk-transparent sk-text-14-2857-521 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
          </view>
        </view>
        <view class="categories">
          <scroll-view :scroll-y="true" class="primary">
            <view class="item active sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-919 sk-text">居家</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-173 sk-text">美食</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-685 sk-text">服饰</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-437 sk-text">母婴</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-970 sk-text">个护</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-74 sk-text">严选</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-14 sk-text">数码</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-722 sk-text">运动</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-340 sk-text">杂项</text>
            </view>
          </scroll-view>
          <scroll-view :scroll-y="true" class="secondary">
            <view is="components/XjyxSwiper" class="banner">
              <view class="carousel XjyxSwiper--carousel">
                <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator XjyxSwiper--navigator" hover-class="none">
                      <image class="image XjyxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                    <navigator class="navigator XjyxSwiper--navigator" hover-class="none">
                      <image class="image XjyxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                </swiper>
                <view class="indicator XjyxSwiper--indicator">
                  <text class="dot XjyxSwiper--dot active XjyxSwiper--active"></text>
                  <text class="dot XjyxSwiper--dot"></text>
                  <text class="dot XjyxSwiper--dot"></text>
                  <text class="dot XjyxSwiper--dot"></text>
                  <text class="dot XjyxSwiper--dot"></text>
                </view>
              </view>
            </view>
            <view class="panel">
              <view class="title">
                <text class="name sk-transparent sk-text-26-6667-904 sk-text">居家生活用品</text>
                <navigator class="more sk-transparent sk-text-30-0000-619 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
              </view>
              <view class="section">
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-187 sk-text">法国年份雅文邑700毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-881 sk-text">1480.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-44 sk-text">梅乃宿梅酒720毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-93 sk-text">168.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-242 sk-text">多米尼加陈年朗姆酒700毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-875 sk-text">238.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-648 sk-text">川味牛肉辣椒酱190克</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-42 sk-text">38.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-311 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-372 sk-text">69.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-40 sk-text">极光限定 珠光蓝珐琅锅</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-3 sk-text">199.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-901 sk-text">智利老牌名庄，梅洛干红750毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-313 sk-text">98.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-394 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-64 sk-text">149.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-94 sk-text">红小豆450克*3袋</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-976 sk-text">42.80</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                </navigator>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-521 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-919 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-173 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-685 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-437 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-970 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-74 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-14 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-722 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-340 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-26-6667-904 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-30-0000-619 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-187 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-881 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-44 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-93 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-242 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-875 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-648 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-42 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-311 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-372 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-40 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-3 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-901 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-313 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-394 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-64 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-94 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-976 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>