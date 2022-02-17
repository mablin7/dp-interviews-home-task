## 0
* hi{}
  - utter_hi
* INFORM_City
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName
  - utter_CONFIRM_RestaurantName
* REQUEST_Cuisine
  - utter_INFORM_Cuisine
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 1
* hi{}
  - utter_hi
* INFORM_City
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName
  - utter_CONFIRM_RestaurantName
* REQUEST_Cuisine
  - utter_INFORM_Cuisine
* NEGATE+THANK_YOU{}
  - utter_REQ_MORE
  - utter_GOODBYE

## 2
* hi{}
  - utter_hi
* INFORM_INTENT_Intent
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_Date+INFORM_PartySize+INFORM_RestaurantName+INFORM_Time{"date": "later today", "party_size": "4", "restaurant_name": "Kusakabe", "time": "evening 6:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_City+NEGATE{"date": "March 5th", "city": "El Cerrito"}
  - utter_CONFIRM_City+CONFIRM_Date
* INFORM_PartySize+INFORM_RestaurantName+NEGATE{"party_size": "3", "restaurant_name": "Yoshio"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "18:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE
