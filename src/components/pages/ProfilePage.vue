<template>
  <section>
    <div class="title">
      <ArrowIcon />
      <div class="header">
        <h1 class="username">John Doe</h1>
        <h3 class="post-sum">25 tweet</h3>
      </div>
    </div>
    <div class="info">
      <div class="info-img">
        <img src="../../assets/CoverPhoto.png" />
        <div class="user-img">
          <img
            src="https://www.fountain.org.tw/upload/repository/74a7f73b7f18d193ddebff71c0b8afeaimage_normal.jpg"
          />
        </div>
      </div>
      <div class="edit-btn">
        <button>Edit Profile</button>
      </div>
      <div class="info-details">
        <div class="name-account">
          <h2>John Doe</h2>
          <h3>@heyJohn</h3>
        </div>
        <p class="desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div class="follow-box">
          <div>
            <b>34</b>
            <span>Following</span>
          </div>
          <div>
            <b>59</b>
            <span>Follower</span>
          </div>
        </div>
      </div>
      <div class="tools-bar">
        <div class="tool active">Tweet</div>
        <div class="tool">Tweet & Reply</div>
        <div class="tool">Liked</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowIcon from "../icons/ArrowIcon.vue";
</script>

<style scoped lang="scss">
section {
  flex: 1;
  .title {
    border-bottom: 1px solid #e6ecf0;
    padding: 4px 0 4px 12px;
    display: flex;
    align-items: center;
    .header {
      margin-left: 24px;
      h1 {
        font-size: 20px;
        font-weight: 900;
        line-height: 26px;
      }
      h3 {
        font-size: 12px;
        line-height: 14px;
        color: #657786;
      }
    }
  }
  .info {
    width: 100%;
    border-bottom: 1px solid #e6ecf0;
    .info-img {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .user-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 20px;
        transform: translateY(50%);
        img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    .edit-btn {
      width: 100%;
      margin-bottom: 2.2rem;
      display: flex;
      justify-content: flex-end;
      button {
        appearance: none;
        border: none;
        width: 120px;
        height: 35px;
        margin: 4px 10px;
        border-radius: 40px;
        border: 1px solid #ff6600;
        background-color: transparent;
        color: #ff6600;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          background-color: #ff6600;
          color: #fff;
        }
      }
    }
    .info-details {
      padding: 0 16px;
      .name-account {
        h2 {
          font-weight: bold;
          font-size: 20px;
        }
        h3 {
          font-size: 15px;
          font-weight: 500;
          color: #657786;
        }
      }
      .desc {
        margin: 4px 0;
        font-size: 14px;
      }
      .follow-box {
        div {
          display: inline-block;
          font-size: 14px;
          b {
            margin-right: 4px;
          }
          span {
            color: #657786;
            margin-right: 16px;
          }
        }
      }
    }
    .tools-bar {
      display: flex;
      .tool {
        width: 110px;
        height: 50px;
        font-size: 15px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &.active {
          color: #ff6600;
          border-bottom: 2px solid #ff6600;
        }
      }
    }
  }
}
</style>
