package com.iconbadger.android_badge;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import me.leolin.shortcutbadger.ShortcutBadger;

public class RNBadgerAndroidModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNBadgerAndroidModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNBadgerAndroid";
  }

  @ReactMethod
  public void setBadge(int badgeCount, Promise promise) {
    promise.resolve(ShortcutBadger.applyCount(reactContext, badgeCount));
  }

  @ReactMethod
  public void removeBadge(Promise promise) {
    promise.resolve(ShortcutBadger.removeCount(reactContext));
  }
}
