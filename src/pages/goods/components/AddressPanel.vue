// AddressPanel.vue
<script setup lang="ts">
import { getMemberAddressAPI } from '@/services/address'
import type { AddressItem } from '@/types/address'
import { onLaunch, onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

const emit = defineEmits<{
  (event: 'close'): void
}>()

// 获取收货地址列表数据
const addressList = ref<AddressItem[]>([])
const getMemberAddressData = async () => {
  const res = await getMemberAddressAPI()
  addressList.value = res.result
}
console.log('addressList', addressList.value);
getMemberAddressData()

const addressShow = (()=>{

})
</script>

<template>
  <view class="address-panel">
    <!-- 关闭按钮 -->
    <text class="close icon-close" @tap="emit('close')"></text>
    <!-- 标题 -->
    <view class="title">配送至</view>
    <!-- 内容 -->
    <view class="content" >
      <view class="item" @tap="addressShow" v-for="item in addressList" :key="item.id">
        <text v-if="item.isDefault" class="badge">默认</text>
        <view class="user">{{item.receiver}} {{item.contact}}</view>
        <view class="address">{{item.address}}</view>
        <text class="icon" :class="item.isDefault?'icon-checked':''" ></text>
      </view>
    </view>
    <view class="footer">
      <navigator class="button primary" url="/pagesMember/address-form/address-form"> 新建地址 </navigator>
      <view v-if="false" class="button primary">确定</view>
    </view>
  </view>
</template>

<style lang="scss">
.address-panel {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: #fff;
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid #ddd;
  color: #444;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}

.content {
  min-height: 300rpx;
  max-height: 540rpx;
  overflow: auto;
  padding: 20rpx;
  .item {
    padding: 30rpx 50rpx 30rpx 60rpx;
    background-size: 40rpx;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);
    position: relative;

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      // margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }
  .icon {
    color: #999;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  .icon-checked {
    color: #27ba9b;
  }
  .icon-ring {
    color: #444;
  }
  .user {
    font-size: 28rpx;
    color: #444;
    font-weight: 500;
  }
  .address {
    font-size: 26rpx;
    color: #666;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0 40rpx;
  font-size: 28rpx;
  color: #444;

  .button {
    flex: 1;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin: 0 20rpx;
    color: #fff;
    border-radius: 72rpx;
  }

  .primary {
    color: #fff;
    background-color: #27ba9b;
  }

  .secondary {
    background-color: #ffa868;
  }
}
</style>