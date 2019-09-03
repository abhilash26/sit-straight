# Sit Straight

## What it is?

It is a posture correcter. It works by alarming the user that they are using incorrect posture and tells the reason why. 

## How it Works?

It works by using camera to detect the closeness to the screen, the head rotation in all 3 (x, y and z) directions. After detecting these on each frame it then determines if the user is having correct posture or not alarms the user if they are having incorrect posture. 

## Benefits

1. It is beneficial for bone, muscle and nerves related problem due to incorrect posture.
2. It also helps the eyes by making sure there is ample distance between the screen and the eyes of the user.
3. Regular use will help in creating habits of good posture.

## Warnings

1. This app needs camera to work, also camera permission is also needed.
2. There may be some compatibility issues on some computers.
3. This app uses [jeelizWeboji](https://github.com/jeeliz/jeelizWeboji) for the face tracking so what doesn't work there will not be working here.

## Custom Configurations

Configure below constants in /src/js/posture.js as you want this to be.
1. HEADPOSTURE_ROTATION_X_L_THRESHOLD
2. HEADPOSTURE_ROTATION_X_S_THRESHOLD
3. HEADPOSTURE_ROTATION_Y_THRESHOLD
4. HEADPOSTURE_ROTATION_Z_THRESHOLD
5. SCREEN_DISTANCE_POSTION_THRESHOLD