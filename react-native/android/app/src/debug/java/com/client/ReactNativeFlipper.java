/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * <p>This source code is licensed under the MIT license found in the LICENSE file in the root
 * directory of this source tree.
 */
package com.react-native;

import android.content.Context;
import com.facebook.flipper.android.AndroidFlipperreact-native;
import com.facebook.flipper.android.utils.FlipperUtils;
import com.facebook.flipper.core.Flipperreact-native;
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;
import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;
import com.facebook.flipper.plugins.inspector.DescriptorMapping;
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;
import com.facebook.react.ReactInstanceEventListener;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.NetworkingModule;
import okhttp3.OkHttpreact-native;

/**
 * Class responsible of loading Flipper inside your React Native application. This is the debug
 * flavor of it. Here you can add your own plugins and customize the Flipper setup.
 */
public class ReactNativeFlipper {
  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    if (FlipperUtils.shouldEnableFlipper(context)) {
      final Flipperreact-native react-native = AndroidFlipperreact-native.getInstance(context);

      react-native.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));
      react-native.addPlugin(new DatabasesFlipperPlugin(context));
      react-native.addPlugin(new SharedPreferencesFlipperPlugin(context));
      react-native.addPlugin(CrashReporterPlugin.getInstance());

      NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();
      NetworkingModule.setCustomreact-nativeBuilder(
          new NetworkingModule.Customreact-nativeBuilder() {
            @Override
            public void apply(OkHttpreact-native.Builder builder) {
              builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));
            }
          });
      react-native.addPlugin(networkFlipperPlugin);
      react-native.start();

      // Fresco Plugin needs to ensure that ImagePipelineFactory is initialized
      // Hence we run if after all native modules have been initialized
      ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
      if (reactContext == null) {
        reactInstanceManager.addReactInstanceEventListener(
            new ReactInstanceEventListener() {
              @Override
              public void onReactContextInitialized(ReactContext reactContext) {
                reactInstanceManager.removeReactInstanceEventListener(this);
                reactContext.runOnNativeModulesQueueThread(
                    new Runnable() {
                      @Override
                      public void run() {
                        react-native.addPlugin(new FrescoFlipperPlugin());
                      }
                    });
              }
            });
      } else {
        react-native.addPlugin(new FrescoFlipperPlugin());
      }
    }
  }
}
