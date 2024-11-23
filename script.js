TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4",
  "thumbnailUrl": "media/panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "BED 2",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_451E6109_5789_963A_41B3_00F0EEF54BF5",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576, this.camera_49BBAD83_5799_8E2E_4194_937E9D0C4B84); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 55,
           "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": 2.28,
        "hfov": 7.65,
        "pitch": -38.93
       }
      ],
      "items": [
       {
        "yaw": 2.28,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 81,
           "width": 111,
           "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -38.93
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_466230E3_578B_97ED_41D2_40075093A2F7",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D, this.camera_49B7CD95_5799_8E2A_41B7_96039C21CB7A); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 48,
           "width": 67,
           "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "yaw": -81.4,
        "hfov": 9.67,
        "pitch": -34.86
       }
      ],
      "items": [
       {
        "yaw": -81.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 97,
           "width": 134,
           "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -34.86
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E",
  "thumbnailUrl": "media/panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "BW KIT AND BED",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_5841F48A_5788_9E3F_41D2_8475DF535736",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E, this.camera_49AB3D4D_5799_8E3A_4168_EA828C3A05B5); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 38,
              "width": 75,
              "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -163.55,
           "hfov": 9.4,
           "pitch": -45.03
          }
         ],
         "items": [
          {
           "yaw": -163.55,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.4,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 77,
              "width": 151,
              "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -45.03
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_45A5733C_5789_BA5A_41D5_1CB107F72453",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606, this.camera_49A07D5F_5799_8ED6_41D2_A492E5EE6201); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 41,
              "width": 62,
              "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": 82.27,
           "hfov": 9.66,
           "pitch": -28.95
          }
         ],
         "items": [
          {
           "yaw": 82.27,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.66,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 125,
              "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.95
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "id": "panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576",
     "thumbnailUrl": "media/panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "KITCHEN ENTRY",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E",
       "yaw": -163.55,
       "distance": 1,
       "backwardYaw": 2.28
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_461255F9_5788_99DA_41C4_AD457DE6B281",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576, this.camera_494DCDA6_5799_8E76_41C2_639851B6CC99); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 25,
                 "width": 55,
                 "url": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -87.43,
              "hfov": 8.77,
              "pitch": -26.32
             }
            ],
            "items": [
             {
              "yaw": -87.43,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 51,
                 "width": 111,
                 "url": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -26.32
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "id": "panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606",
        "thumbnailUrl": "media/panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "KITCHEN 3",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576",
          "yaw": -87.43,
          "distance": 1,
          "backwardYaw": 82.27
         }
        ]
       },
       "yaw": 82.27,
       "distance": 1,
       "backwardYaw": -87.43
      }
     ]
    },
    "yaw": 2.28,
    "distance": 1,
    "backwardYaw": -163.55
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_4577519A_5789_965F_41C6_CD750BD70375",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E, this.camera_49630E35_5799_8A55_4181_50A6CEBB5B39); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 41,
              "width": 72,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": 74.6,
           "hfov": 10.48,
           "pitch": -34.98
          }
         ],
         "items": [
          {
           "yaw": 74.6,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 145,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -34.98
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_45374017_5797_9655_41CF_69FB9C3BEEEE",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907, this.camera_49641E23_5799_8A6D_41D0_E891AFD1326D); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 31,
              "width": 62,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": -40.58,
           "hfov": 9.87,
           "pitch": -26.57
          }
         ],
         "items": [
          {
           "yaw": -40.58,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 62,
              "width": 125,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -26.57
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_4D2B26DB_5788_9BDD_41D3_05B53D99D2DA",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 57,
              "width": 57,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -4.32,
           "hfov": 10.06,
           "pitch": -9.26
          }
         ],
         "items": [
          {
           "yaw": -4.32,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.06,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 114,
              "width": 115,
              "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -9.26
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "id": "panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D",
     "thumbnailUrl": "media/panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_t.jpg",
     "pitch": 0,
     "class": "Panorama",
     "label": "DINING CAMERA",
     "hfov": 360,
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_43C5B2C0_5798_9A2A_41C6_9710F5E21DF2",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F, this.camera_4918FE7D_5799_8AD5_41A8_7E4DE7D5D063); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 57,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -173.98,
              "hfov": 8.98,
              "pitch": -26.44
             }
            ],
            "items": [
             {
              "yaw": -173.98,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 100,
                 "width": 114,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -26.44
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_447079F8_579B_89DA_41C9_F8CD40F03776",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF, this.camera_497BCE47_5799_8A35_41CC_EA39E3701A78); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 38,
                 "width": 52,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -58.29,
              "hfov": 8.68,
              "pitch": -20.66
             }
            ],
            "items": [
             {
              "yaw": -58.29,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.68,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 77,
                 "width": 105,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -20.66
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_44BB143F_5799_FE55_41BF_B18301996306",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E, this.camera_490DCE59_5799_8ADD_41C2_46CE42F96ADE); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 57,
                 "width": 57,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "yaw": 29.84,
              "hfov": 10.07,
              "pitch": -9.01
             }
            ],
            "items": [
             {
              "yaw": 29.84,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 114,
                 "width": 115,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -9.01
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_42C51DD0_5798_8E2A_41B5_6CAECFABB8DB",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D, this.camera_49068E6B_5799_8AFD_41D4_01CA8B72792D); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 40,
                 "width": 69,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "yaw": 114.8,
              "hfov": 10.53,
              "pitch": -31.09
             }
            ],
            "items": [
             {
              "yaw": 114.8,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.53,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 80,
                 "width": 139,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -31.09
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "id": "overlay_4357B85C_579F_96DA_41D0_1080AFAA2295",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB, this.camera_49105E8F_5799_8A35_41BF_5BD0EF41972A); this.mainPlayList.set('selectedIndex', 13)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 56,
                 "width": 53,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "yaw": -92.88,
              "hfov": 9.19,
              "pitch": 13.22
             }
            ],
            "items": [
             {
              "yaw": -92.88,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.19,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 112,
                 "width": 107,
                 "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_0_HS_5_0.png"
                }
               ]
              },
              "pitch": 13.22
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "id": "panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
        "thumbnailUrl": "media/panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_t.jpg",
        "pitch": 0,
        "class": "Panorama",
        "label": "HALL CAM 1",
        "hfov": 360,
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_4E04AA1D_5797_8A5A_41AA_E82CE769C23C",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897, this.camera_48D37F0B_5799_8A3D_41C4_12C6F60C10BF); this.mainPlayList.set('selectedIndex', 11)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 81,
                    "width": 87,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -86.18,
                 "hfov": 14.04,
                 "pitch": -23.43
                }
               ],
               "items": [
                {
                 "yaw": -86.18,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 14.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 162,
                    "width": 174,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -23.43
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_42901CEA_5788_8FFE_41A4_62D1E994E075",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907, this.camera_48DA4EFA_5799_8BDF_41C5_B9BFDC09012D); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 51,
                    "width": 59,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 116.43,
                 "hfov": 9.62,
                 "pitch": -24.05
                }
               ],
               "items": [
                {
                 "yaw": 116.43,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 102,
                    "width": 119,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -24.05
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_4D8AAC04_5798_8E2A_41C0_3094ADB5E081",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C, this.camera_48C06EE8_5799_8BFB_41CD_7FEF2A731E29); this.mainPlayList.set('selectedIndex', 16)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 78,
                    "width": 65,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -16.46,
                 "hfov": 9.57,
                 "pitch": -33.98
                }
               ],
               "items": [
                {
                 "yaw": -16.46,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.57,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 157,
                    "width": 131,
                    "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -33.98
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "id": "panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
           "thumbnailUrl": "media/panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "PRAYER OUT",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_4D84CD7F_5788_8ED5_41D1_49BA130894CE",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF, this.camera_48E6FF1D_5799_8A55_41D3_B0E27970EAEA); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 86,
                       "width": 73,
                       "url": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 120.66,
                    "hfov": 12.07,
                    "pitch": -21.32
                   }
                  ],
                  "items": [
                   {
                    "yaw": 120.66,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 12.07,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 172,
                       "width": 147,
                       "url": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -21.32
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "id": "panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C",
              "thumbnailUrl": "media/panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_t.jpg",
              "pitch": 0,
              "class": "Panorama",
              "label": "BED 3",
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
                "yaw": 120.66,
                "distance": 1,
                "backwardYaw": -16.46
               }
              ]
             },
             "yaw": -16.46,
             "distance": 1,
             "backwardYaw": 120.66
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
             "yaw": 116.43,
             "distance": 1,
             "backwardYaw": -58.29
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_42C459F5_5799_89EA_41D3_B6B8DA64BCA4",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF, this.camera_48F88F2F_5799_8A75_41B5_83B09813FFBA); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 64,
                       "width": 49,
                       "url": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 94.2,
                    "hfov": 7.1,
                    "pitch": -35.99
                   }
                  ],
                  "items": [
                   {
                    "yaw": 94.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.1,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 128,
                       "width": 99,
                       "url": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -35.99
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "id": "panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897",
              "thumbnailUrl": "media/panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_t.jpg",
              "pitch": 0,
              "class": "Panorama",
              "label": "PRAYER INSIDE",
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
                "yaw": 94.2,
                "distance": 1,
                "backwardYaw": -86.18
               }
              ]
             },
             "yaw": -86.18,
             "distance": 1,
             "backwardYaw": 94.2
            }
           ]
          },
          "yaw": -58.29,
          "distance": 1,
          "backwardYaw": 116.43
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_4F084830_578B_B66A_41BB_9D451EA280EA",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907, this.camera_494BDDB8_5799_8E5A_41B1_4FE8F0D1C785); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 41,
                    "width": 40,
                    "url": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -156.25,
                 "hfov": 6.76,
                 "pitch": -20.05
                }
               ],
               "items": [
                {
                 "yaw": -156.25,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.76,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 82,
                    "width": 81,
                    "url": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -20.05
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "id": "panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E",
           "thumbnailUrl": "media/panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "COURTYARD",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
             "yaw": -156.25,
             "distance": 1,
             "backwardYaw": 29.84
            }
           ]
          },
          "yaw": 29.84,
          "distance": 1,
          "backwardYaw": -156.25
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D",
          "yaw": 114.8,
          "distance": 1,
          "backwardYaw": -40.58
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_4415A9B9_5798_B65A_41C6_FCC405D962CE",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907, this.camera_495AEDED_5799_89F5_41CB_9F60B0B5386D); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 48,
                    "width": 62,
                    "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -0.13,
                 "hfov": 9.87,
                 "pitch": -26.57
                }
               ],
               "items": [
                {
                 "yaw": -0.13,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 9.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 97,
                    "width": 125,
                    "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -26.57
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_45DDF31B_5799_9A5E_41D3_959898C112A2",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C, this.camera_495D7DDB_5799_89DD_419E_3E9B46B2CC8F); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 60,
                    "width": 67,
                    "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -91.2,
                 "hfov": 10.02,
                 "pitch": -31.84
                }
               ],
               "items": [
                {
                 "yaw": -91.2,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.02,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 120,
                    "width": 134,
                    "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -31.84
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "id": "panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F",
           "thumbnailUrl": "media/panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "FOYER CAMERA",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_44395ABC_5798_8A5B_41C6_1BC4EC6D053A",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F, this.camera_49BD8D71_5799_8EEA_41C1_7CFB17D14499); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 40,
                       "width": 77,
                       "url": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 89.3,
                    "hfov": 11.41,
                    "pitch": -32.6
                   }
                  ],
                  "items": [
                   {
                    "yaw": 89.3,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.41,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 80,
                       "width": 154,
                       "url": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -32.6
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "id": "panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C",
              "thumbnailUrl": "media/panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_t.jpg",
              "pitch": 0,
              "class": "Panorama",
              "label": "LIVING CAMERA",
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F",
                "yaw": 89.3,
                "distance": 1,
                "backwardYaw": -91.2
               }
              ]
             },
             "yaw": -91.2,
             "distance": 1,
             "backwardYaw": 89.3
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
             "yaw": -0.13,
             "distance": 1,
             "backwardYaw": -173.98
            }
           ]
          },
          "yaw": -173.98,
          "distance": 1,
          "backwardYaw": -0.13
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "id": "overlay_41755D86_5788_8E36_41C2_5D09E8BFD2AF",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5, this.camera_49501DFF_5799_89D5_41D3_B0CF3F2C4C0F); this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 58,
                    "width": 61,
                    "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -7.04,
                 "hfov": 10.75,
                 "pitch": -4.33
                }
               ],
               "items": [
                {
                 "yaw": -7.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.75,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 117,
                    "width": 122,
                    "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -4.33
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "id": "overlay_427894E1_5789_9FED_41D2_F4BEFAC06876",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907, this.camera_496D2E11_5799_8A2D_41D0_FAE65093A931); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 51,
                    "width": 36,
                    "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 7.37,
                 "hfov": 5.48,
                 "pitch": -31.42
                }
               ],
               "items": [
                {
                 "yaw": 7.37,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 103,
                    "width": 73,
                    "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -31.42
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "id": "panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB",
           "thumbnailUrl": "media/panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_t.jpg",
           "pitch": 0,
           "class": "Panorama",
           "label": "STAIR",
           "hfov": 360,
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_41BD3610_5788_BA2A_41D3_24AF174A1867",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB, this.camera_4936AEC4_5799_8A2B_41D5_25DB39F80755); this.mainPlayList.set('selectedIndex', 13)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 57,
                       "width": 58,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -174.4,
                    "hfov": 9.25,
                    "pitch": -24.84
                   }
                  ],
                  "items": [
                   {
                    "yaw": -174.4,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.25,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 115,
                       "width": 116,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -24.84
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_40B278A4_578F_966B_41B3_B534EA5E3442",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0, this.camera_493D8EB2_5799_8A6F_41CD_4547E0856927); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 37,
                       "width": 79,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 83.02,
                    "hfov": 12.68,
                    "pitch": -25.56
                   }
                  ],
                  "items": [
                   {
                    "yaw": 83.02,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 12.68,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 74,
                       "width": 159,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -25.56
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "id": "overlay_414F686C_5788_B6FA_41C4_425FDDCD0B77",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45, this.camera_492A5EA1_5799_8A6D_41C4_6A07FE429952); this.mainPlayList.set('selectedIndex', 15)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 39,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 19.16,
                    "hfov": 6.62,
                    "pitch": -16.69
                   }
                  ],
                  "items": [
                   {
                    "yaw": 19.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.62,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 109,
                       "width": 78,
                       "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -16.69
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "id": "panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
              "thumbnailUrl": "media/panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_t.jpg",
              "pitch": 0,
              "class": "Panorama",
              "label": "UPPER CAM 1",
              "hfov": 360,
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_40B0695A_5789_96DF_41D1_38FA29114056",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5, this.camera_49477DCA_5799_8E3E_41B3_729E904584AC); this.mainPlayList.set('selectedIndex', 14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 39,
                          "width": 45,
                          "url": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -66.35,
                       "hfov": 7.66,
                       "pitch": -16.52
                      }
                     ],
                     "items": [
                      {
                       "yaw": -66.35,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.66,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 79,
                          "width": 90,
                          "url": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -16.52
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "partial": false,
                 "id": "panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45",
                 "thumbnailUrl": "media/panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_t.jpg",
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "UPPER CAM 2",
                 "hfov": 360,
                 "hfovMin": 60,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
                   "yaw": -66.35,
                   "distance": 1,
                   "backwardYaw": 19.16
                  }
                 ]
                },
                "yaw": 19.16,
                "distance": 1,
                "backwardYaw": -66.35
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "id": "overlay_4038D4F3_5788_7FEE_41C1_1E00498F59DE",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5, this.camera_48C89ED6_5799_8BD7_41B8_4F8B87F91C55); this.mainPlayList.set('selectedIndex', 14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 31,
                          "width": 45,
                          "url": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -0.05,
                       "hfov": 7.41,
                       "pitch": -22.06
                      }
                     ],
                     "items": [
                      {
                       "yaw": -0.05,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 63,
                          "width": 91,
                          "url": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -22.06
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "partial": false,
                 "id": "panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0",
                 "thumbnailUrl": "media/panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_t.jpg",
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "CENTER OF DIN LIV",
                 "hfov": 360,
                 "hfovMin": 60,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
                   "yaw": -0.05,
                   "distance": 1,
                   "backwardYaw": 83.02
                  }
                 ]
                },
                "yaw": 83.02,
                "distance": 1,
                "backwardYaw": -0.05
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB",
                "yaw": -174.4,
                "distance": 1,
                "backwardYaw": -7.04
               }
              ]
             },
             "yaw": -7.04,
             "distance": 1,
             "backwardYaw": -174.4
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
             "yaw": 7.37,
             "distance": 1,
             "backwardYaw": -92.88
            }
           ]
          },
          "yaw": -92.88,
          "distance": 1,
          "backwardYaw": 7.37
         }
        ]
       },
       "yaw": -40.58,
       "distance": 1,
       "backwardYaw": 114.8
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E",
       "yaw": 74.6,
       "distance": 1,
       "backwardYaw": -81.4
      }
     ]
    },
    "yaw": -81.4,
    "distance": 1,
    "backwardYaw": 74.6
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_4EBD5318_5789_FA5B_41D4_324F97AF9627",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 47,
           "url": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -21.34,
        "hfov": 7.42,
        "pitch": -26.83
       }
      ],
      "items": [
       {
        "yaw": -21.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 131,
           "width": 94,
           "url": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -26.83
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_5EFBD828_5778_967A_41D4_95DE11A4D071",
  "thumbnailUrl": "media/panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_t.jpg",
  "pitch": 0,
  "class": "Panorama",
  "label": "FF BED",
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBD828_5778_967A_41D4_95DE11A4D071",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5DAE522B_5778_9A7E_41C0_0D8DAAF699C4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EF1EF3D_5778_8A55_41C0_31C18960D94E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFB5518_5778_FE5B_41D0_59E10263E2A0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFB7B69_5778_8AFD_41D4_143B89BC172E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EF481FC_5778_99DB_41CF_E255C6B5AA2D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBD828_5778_967A_41D4_95DE11A4D071",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBD828_5778_967A_41D4_95DE11A4D071_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC5E2B_5778_8A7E_41B1_57FAFE19292F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBF496_5778_BE57_4195_3DBBEE715907_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFEBAF5_5778_8BEA_41D0_0FD1E9866606_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFBA100_5778_962B_41B6_2FEEA39A3576_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC56E4_5778_9BEB_41D2_CBFC485D194C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC4D0C_5778_8E3A_41B0_9F7DC9BDD897_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFCC310_5778_7A2B_41D3_D2FE4E2FBCFF_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFCD915_5778_762A_41D5_C5B31F249FDB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFC2F26_5779_8A76_41D4_5CC7DFFB16A5_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5EFE1516_5779_9E57_41CF_E15FED8A7D45_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4B61A1C7_5799_9636_41CA_A5E09DB21B0C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 16, 0)"
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49AB3D4D_5799_8E3A_4168_EA828C3A05B5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.72,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49A07D5F_5799_8ED6_41D2_A492E5EE6201",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.57,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49BD8D71_5799_8EEA_41C1_7CFB17D14499",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.8,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49BBAD83_5799_8E2E_4194_937E9D0C4B84",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.45,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49B7CD95_5799_8E2A_41B7_96039C21CB7A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -105.4,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_494DCDA6_5799_8E76_41C2_639851B6CC99",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.73,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_494BDDB8_5799_8E5A_41B1_4FE8F0D1C785",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.16,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49477DCA_5799_8E3E_41B3_729E904584AC",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.84,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_495D7DDB_5799_89DD_419E_3E9B46B2CC8F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.7,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_495AEDED_5799_89F5_41CB_9F60B0B5386D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.02,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49501DFF_5799_89D5_41D3_B0CF3F2C4C0F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.6,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_496D2E11_5799_8A2D_41D0_FAE65093A931",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.12,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49641E23_5799_8A6D_41D0_E891AFD1326D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.2,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49630E35_5799_8A55_4181_50A6CEBB5B39",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 98.6,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_497BCE47_5799_8A35_41CC_EA39E3701A78",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.57,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_490DCE59_5799_8ADD_41C2_46CE42F96ADE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.75,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49068E6B_5799_8AFD_41D4_01CA8B72792D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.42,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_4918FE7D_5799_8AD5_41A8_7E4DE7D5D063",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.87,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_49105E8F_5799_8A35_41BF_5BD0EF41972A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.63,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_492A5EA1_5799_8A6D_41C4_6A07FE429952",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.65,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_493D8EB2_5799_8A6F_41CD_4547E0856927",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.95,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_4936AEC4_5799_8A2B_41D5_25DB39F80755",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.96,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48C89ED6_5799_8BD7_41B8_4F8B87F91C55",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.98,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48C06EE8_5799_8BFB_41CD_7FEF2A731E29",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -59.34,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48DA4EFA_5799_8BDF_41C5_B9BFDC09012D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.71,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48D37F0B_5799_8A3D_41C4_12C6F60C10BF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -85.8,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48E6FF1D_5799_8A55_41D3_B0E27970EAEA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.54,
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_48F88F2F_5799_8A75_41B5_83B09813FFBA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.82,
   "pitch": 0
  }
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadow": true,
  "playbackBarBorderRadius": 0,
  "progressBorderSize": 0,
  "toolTipBorderColor": "#767676",
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipBorderSize": 1,
  "toolTipFontColor": "#606060",
  "toolTipPaddingTop": 4,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeight": 10,
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarLeft": 0,
  "progressBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressRight": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "minWidth": 100,
  "toolTipShadowSpread": 0,
  "progressLeft": 0,
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "height": "100%",
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderRadius": 0,
  "playbackBarRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderSize": 0,
  "transitionMode": "blending",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "top": 0,
  "progressHeight": 10,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "id": "MainViewer",
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "width": "100%",
  "class": "ViewerArea",
  "left": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "paddingRight": 0,
  "minWidth": 20,
  "overflow": "visible",
  "paddingLeft": 0,
  "height": 200,
  "scrollBarMargin": 2,
  "gap": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "horizontal",
  "bottom": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "minHeight": 20,
  "class": "Container",
  "left": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "right": 0,
  "verticalAlign": "bottom"
 },
 {
  "class": "ThumbnailList",
  "itemLabelPosition": "bottom",
  "itemLabelFontWeight": "normal",
  "paddingRight": 20,
  "minWidth": 20,
  "itemThumbnailOpacity": 1,
  "playList": "this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist",
  "rollOverItemLabelFontWeight": "normal",
  "itemThumbnailWidth": 75,
  "itemLabelTextDecoration": "none",
  "paddingLeft": 20,
  "scrollBarMargin": 2,
  "width": "7.6%",
  "itemHorizontalAlign": "center",
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColorRatios": [],
  "rollOverItemBackgroundOpacity": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "itemPaddingRight": 3,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowSpread": 1,
  "itemLabelGap": 9,
  "shadow": false,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "itemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "top": "0.11%",
  "itemBorderRadius": 0,
  "bottom": "0%",
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "layout": "vertical",
  "itemMode": "normal",
  "borderRadius": 5,
  "id": "ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74",
  "itemThumbnailShadowOpacity": 0.54,
  "paddingTop": 10,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailShadow": true,
  "scrollBarVisible": "rollOver",
  "itemLabelFontFamily": "Arial",
  "itemPaddingLeft": 3,
  "minHeight": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowBlurRadius": 8,
  "itemPaddingTop": 3,
  "itemThumbnailBorderRadius": 50,
  "itemVerticalAlign": "middle",
  "right": "0%",
  "itemLabelFontStyle": "normal",
  "verticalAlign": "top",
  "selectedItemLabelFontColor": "#FFCC00"
 }
], 
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "minWidth": 20,
 "overflow": "visible",
 "paddingLeft": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getKey": function(key){  return window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "gap": 10,
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top"
})