## 0
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Berkeley", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_Time+INFORM_RestaurantName{"time": "6:15 in the evening", "restaurant_name": "Bistro liaison"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 1
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Noodles", "city": "Berkeley"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:30 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 2
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
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

## 3
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Time{"restaurant_name": "la traviata", "city": "san fran", "time": "6:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 4
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "5 pm", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Sociale", "city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 5
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "March 12th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Tao San Jin", "time": "2 o\"clock in the afternoon"}
  - utter_REQUEST_City
* INFORM_City{"city": "Antioch"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Khana Peena", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_City+NEGATE{"date": "9th of March", "city": "Berkeley"}
  - utter_CONFIRM_City+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "12 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 6
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Richmond"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Ramen"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_HasLiveMusic{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "18:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "3", "date": "next Friday"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 7
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Asian", "city": "Fremont"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "half past 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "March 10th"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 8
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Mexican"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Mateo"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Date+INFORM_Time{"date": "the 8th", "time": "11 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 9
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Half Moon Bay", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_Time+INFORM_RestaurantName+INFORM_PartySize{"time": "one in the afternoon", "restaurant_name": "Shiki", "party_size": "2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_Cuisine{"cuisine": "Tacos"}
  - utter_INFORM_Cuisine
* REQUEST_PriceRange{}
  - utter_INFORM_PriceRange
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 10
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "11:15", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "Pleasant Hill"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Wence's"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_Cuisine+INFORM_ServesAlcohol+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 11
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Punjabi", "city": "San Jose"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_PriceRange{"price_range": "expensive"}
  - utter_INFORM_PriceRange
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_ServesAlcohol+REQUEST_ALTS{"serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 12
* hi{}
  - utter_hi
* INFORM_Date+INFORM_PartySize+INFORM_INTENT_Intent{"date": "8th of this month", "party_size": "1", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_City+INFORM_Time{"city": "Milpitas", "time": "1:30 in the afternoon"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Darda"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_Cuisine+AFFIRM{"cuisine": "Spicy Indian"}
  - utter_INFORM_ServesAlcohol+INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 13
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Calistoga"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Cambodian"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "half past 12 in the afternoon", "party_size": "2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 14
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Antioch"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "lobster"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time+INFORM_PartySize{"time": "4:30 pm", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "18:00", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 15
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "Alameda", "restaurant_name": "Applebee's", "time": "13:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+INFORM_RestaurantName+NEGATE{"party_size": "1", "restaurant_name": "Barrel Head"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 16
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine+INFORM_PriceRange{"city": "Pacifica", "cuisine": "Sushi", "price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_REQ_MORE
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "6 pm", "date": "March 1st"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 17
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Fairfield", "cuisine": "Asian Fusion"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "March 11th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "half past 6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 18
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Jose", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_Time+INFORM_RestaurantName{"time": "19:00", "restaurant_name": "Flames Eatery"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_City+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 19
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Juerga"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_Time+INFORM_City{"time": "10:45 in the morning", "city": "San Jose"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "Lotus Cuisine", "city": "San Rafael"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 20
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Santa Rosa", "cuisine": "Izakaya"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "today"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7 o\"clock in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "3", "time": "1 pm"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "4", "date": "the 9th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 21
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Ethiopian", "city": "Berkeley"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "the 4th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "17:15", "date": "2nd of this month"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+REQUEST_PriceRange+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "17:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 22
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:45"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Bikaner"}
  - utter_REQUEST_City
* INFORM_City+INFORM_RestaurantName{"city": "San Carlos", "restaurant_name": "West Park"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_PartySize+NEGATE{"date": "tomorrow", "party_size": "3"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_ServesAlcohol+INFORM_Cuisine+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 23
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_HasLiveMusic+INFORM_INTENT_Intent{"price_range": "inexpensive", "has_live_music": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "soup", "city": "San Ramon"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "7:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 24
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName+REQUEST_Time
* INFORM_Time+INFORM_City+INFORM_RestaurantName{"time": "afternoon 1:30", "city": "Berkeley", "restaurant_name": "Khana Peena"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 25
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Oakland"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Fish"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "2", "time": "10:30 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_Time+INFORM_INTENT_Intent{"party_size": "1", "time": "12:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 26
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "SFO", "cuisine": "Japanese"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date+INFORM_PartySize{"time": "half past 12 in the afternoon", "date": "Saturday this week", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 27
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Calistoga"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Taiwanese"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress+REQUEST_ServesAlcohol{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "4", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1:30 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 28
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_Time+INFORM_PartySize+INFORM_City+INFORM_RestaurantName{"time": "half past 5 in the evening", "party_size": "4", "city": "Belmont", "restaurant_name": "Sumac"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PriceRange{}
  - utter_INFORM_PriceRange
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 29
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Oakland"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "pizza and pasta"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "half past 5 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 30
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Francisco", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "American"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "12:45 pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 31
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Sushi"}
  - utter_REQUEST_City
* INFORM_City{"city": "Danville"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_City+REQUEST_ALTS{"city": "Milpitas"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_ServesAlcohol+INFORM_StreetAddress
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "11th of March", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 32
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Koryo", "time": "twelve pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 33
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "San Fran", "cuisine": "brunch"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{"price_range": "very expensive"}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 34
* hi{}
  - utter_hi
* INFORM_City+INFORM_Time+INFORM_INTENT_Intent{"city": "Cupertino", "time": "11:30 in the morning", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Fontana's"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 35
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Cupertino"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Malaysian"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 5 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "March 13th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "half past 12 in the afternoon"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 36
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7:30 in the evening"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_City+INFORM_PartySize{"restaurant_name": "Pearl River", "city": "San Jose", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_PriceRange+AFFIRM{"price_range": "inexpensive"}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 37
* hi{}
  - utter_hi
* INFORM_Time+INFORM_Date+INFORM_INTENT_Intent{"time": "seven pm", "date": "9th of this month", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName{"city": "SFO", "restaurant_name": "State Bird"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 38
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "burgers", "city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_ServesAlcohol{}
  - utter_INFORM_PriceRange+INFORM_ServesAlcohol
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "17:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 39
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Russian"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "next Thursday"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6:15 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PriceRange+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_PriceRange
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 40
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_City+INFORM_INTENT_Intent{"cuisine": "Mexican", "city": "Rohnert Park", "intent": "FindRestaurants"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange{"price_range": "inexpensive"}
  - utter_INFORM_PriceRange
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* INFORM_Cuisine+INFORM_PriceRange+REQUEST_ALTS{"cuisine": "Ramen", "price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_REQ_MORE
* INFORM_Time+INFORM_PartySize+INFORM_INTENT_Intent{"time": "morning 11:15", "party_size": "3", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+NOTIFY_SUCCESS
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 41
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "French"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange+REQUEST_ServesAlcohol{"price_range": "moderate"}
  - utter_INFORM_PriceRange+INFORM_ServesAlcohol
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "3", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:45 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 42
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "China Villa", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "18:00", "date": "4th of this month"}
  - utter_REQUEST_City
* INFORM_Time+INFORM_City{"time": "1 in the afternoon", "city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_RestaurantName+INFORM_Date+NEGATE{"restaurant_name": "Wooden Charcoal Barbecue", "date": "March 9th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 43
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Sushi", "city": "Concord"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_StreetAddress{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "inexpensive"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "1", "time": "evening 4:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 44
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_PriceRange+INFORM_Cuisine{"city": "San Rafael", "price_range": "moderate", "cuisine": "Sushi"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Sichuan"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Date+INFORM_Time{"date": "Monday next week", "time": "7 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 45
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "SF", "cuisine": "Japanese"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 46
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Filipino", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Bruno"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_PriceRange{"price_range": "inexpensive"}
  - utter_INFORM_StreetAddress+INFORM_PriceRange
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "six pm", "date": "the 12th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 47
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Fran", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Korean Barbeque"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "7:30 in the evening", "date": "tomorrow"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 48
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_City+INFORM_PartySize+INFORM_INTENT_Intent{"restaurant_name": "Artisan", "city": "Lafayette", "party_size": "5", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 49
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "7 o\"clock in the evening", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "Lafayette"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Date{"restaurant_name": "The Park", "date": "the 6th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+REQUEST_Cuisine+AFFIRM{"cuisine": "Burrito"}
  - utter_INFORM_HasLiveMusic+INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 50
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Fish"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange{"price_range": "inexpensive"}
  - utter_INFORM_PriceRange
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "evening 5:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 51
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Jose", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Freshwater fish"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange{}
  - utter_INFORM_PriceRange
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "quarter to 7 in the evening", "date": "10th of this month"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "1 in the afternoon", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "Tuesday next week"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 52
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "pasta"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Mexican"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "one in the afternoon", "date": "March 7th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "quarter past 12 in the afternoon"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 53
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Asya", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_City+INFORM_PartySize+INFORM_Time{"city": "San Carlos", "party_size": "3", "time": "7 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "13:15", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 54
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 12"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Palmer's"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 55
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Lobster", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Hayward"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "5 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 56
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Napa", "cuisine": "Pizza"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:30 am"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "Morning 11:45"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 57
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Mcdonald's", "time": "4:45 pm"}
  - utter_REQUEST_City
* INFORM_City{"city": "SF"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 58
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Szcheuan"}
  - utter_REQUEST_City
* INFORM_ServesAlcohol+INFORM_City{"serves_alcohol": "True", "city": "Sausalito"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_StreetAddress{}
  - utter_INFORM_PriceRange+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "this Saturday"}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "3", "time": "4:45 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "7:15 in the evening", "date": "the 7th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "2"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 59
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "pizza", "city": "Sunnyvale"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "evening 7:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "afternoon 12:30"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_Date+INFORM_PartySize+NEGATE{"date": "next tuesday", "party_size": "1"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 60
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Dublin", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine+INFORM_PriceRange{"cuisine": "Chinese", "price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date+INFORM_PartySize{"date": "the 7th", "party_size": "4"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "14:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Date+INFORM_INTENT_Intent{"date": "March 9th", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "afternoon 1:45"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 61
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName+REQUEST_City
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "SF", "restaurant_name": "Crazy Pepper", "time": "night 8"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "3"}
  - utter_CONFIRM_City+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Taste of the Himalayas", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+AFFIRM{"cuisine": "Taiwanese"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 62
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_PriceRange+INFORM_Cuisine{"city": "Mountain View", "price_range": "moderate", "cuisine": "French"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_City+REQUEST_ALTS{"city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "morning 10:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "eleven in the morning", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 63
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Date{"restaurant_name": "Marche Aux Fleurs", "city": "Ross", "date": "the 10th"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "eleven am"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 64
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_HasLiveMusic+INFORM_Cuisine{"price_range": "inexpensive", "has_live_music": "True", "cuisine": "salad"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Jose"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "day after tomorrow", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:30 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_City+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "3", "date": "2nd of March"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 65
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City
* INFORM_City+INFORM_Time{"city": "SF", "time": "11:30 in the morning"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_PartySize{"restaurant_name": "Will", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "eleven in the morning"}
  - utter_CONFIRM_Time+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "next Monday"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_PriceRange+REQUEST_PhoneNumber{}
  - utter_INFORM_PriceRange+INFORM_PhoneNumber
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 66
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "SFO", "cuisine": "French"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "13:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 67
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_ServesAlcohol+INFORM_INTENT_Intent{"price_range": "expensive", "serves_alcohol": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "SFO", "cuisine": "Japanese"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "evening 5:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "1", "date": "the 8th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "3", "time": "11:15"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 68
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "later today", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City
* INFORM_City+INFORM_PartySize+INFORM_Time{"city": "Petaluma", "party_size": "3", "time": "six in the evening"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Lemongrass"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 69
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time+INFORM_City{"restaurant_name": "Claw Shack", "time": "11:30 am", "city": "San Jose"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_PartySize+NEGATE{"restaurant_name": "3rd Cousin", "party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 70
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Fran", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Mediterranean"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange+REQUEST_HasLiveMusic{"price_range": "moderate"}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:30 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 71
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Campbell", "cuisine": "burger"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol+INFORM_StreetAddress
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Date+INFORM_Time{"date": "4th of this month", "time": "evening 6:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "the 1st"}
  - utter_CONFIRM_City+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "3"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 72
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City+INFORM_PriceRange{"cuisine": "pick-up", "city": "San Fran", "price_range": "dontcare"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* INFORM_PriceRange+INFORM_ServesAlcohol+REQUEST_ALTS{"price_range": "inexpensive", "serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Date+INFORM_Time{"date": "13th of this month", "time": "afternoon 12"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 73
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 5 in the evening"}
  - utter_REQUEST_RestaurantName
* INFORM_Time+INFORM_City+INFORM_RestaurantName{"time": "7:15 pm", "city": "San Fran", "restaurant_name": "Hikari Sushi"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "1", "date": "March 12th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 74
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Time{"restaurant_name": "Up 2u", "city": "Alameda", "time": "19:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 75
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Diner", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "evening 4:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "1", "time": "6 pm"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 76
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "half past 11 in the morning", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_City+INFORM_PartySize{"restaurant_name": "Kuleto's", "city": "San Fran", "party_size": "6"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 77
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Cotati", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "tacos"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_HasLiveMusic+REQUEST_ALTS{"has_live_music": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_StreetAddress{}
  - utter_INFORM_PriceRange+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "half past 6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 78
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "San Fran", "cuisine": "Taiwanese"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "14:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "11:45", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 79
* hi{}
  - utter_hi
* INFORM_City+INFORM_PriceRange+INFORM_INTENT_Intent{"city": "Fremont", "price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Asian Fusion"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_PhoneNumber{}
  - utter_INFORM_StreetAddress+INFORM_PhoneNumber
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "10th of March", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "1:30 in the afternoon", "party_size": "5"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 80
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Mateo"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Diner"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:45 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE+GOODBYE{}
  - utter_GOODBYE

## 81
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "Sausalito", "cuisine": "Southern"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange+REQUEST_ServesAlcohol{"price_range": "inexpensive"}
  - utter_INFORM_ServesAlcohol+INFORM_PriceRange
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "13:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "one in the afternoon", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 82
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Spicy Indian", "city": "Milpitas"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* INFORM_PartySize+INFORM_Time+INFORM_INTENT_Intent+SELECT{"party_size": "4", "time": "1 o\"clock in the afternoon", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "3", "time": "evening 7:45"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 83
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Sushi"}
  - utter_REQUEST_City
* INFORM_ServesAlcohol+INFORM_PriceRange+INFORM_City{"serves_alcohol": "True", "price_range": "moderate", "city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "five pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "6"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 84
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_PartySize+INFORM_INTENT_Intent{"restaurant_name": "Taste of Burma", "party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_Time+INFORM_City{"time": "quarter past 7 in the evening", "city": "Daly City"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 85
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_Cuisine+INFORM_INTENT_Intent{"price_range": "moderate", "cuisine": "Persian", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Oakland"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_City+REQUEST_ALTS{"city": "San Fran"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "1", "date": "2nd of this month"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "7:30 pm", "date": "March 12th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 86
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Cassava", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_Time+INFORM_PartySize+INFORM_City{"time": "eleven am", "party_size": "6", "city": "SF"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "5"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 87
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Spicy Indian", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Dublin"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 88
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Allegro Romano", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_City+INFORM_Time+INFORM_Date{"city": "San Francisco", "time": "evening 7:30", "date": "dontcare"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_Cuisine+AFFIRM{"cuisine": "Punjabi"}
  - utter_INFORM_Cuisine+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 89
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_PartySize+INFORM_INTENT_Intent{"restaurant_name": "Pescatore", "party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter to 1 in the afternoon"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 90
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Hayward"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "dumplings"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* INFORM_Time+INFORM_Date+INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"time": "7:30 pm", "date": "11th of this month", "party_size": "2", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 91
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Vacaville", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "sushi"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_HasLiveMusic{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "13:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 92
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "San Fran", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Peruvian"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "8th of March", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "quarter to 8 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 93
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_PartySize+INFORM_City{"restaurant_name": "Babu Ji", "party_size": "4", "city": "SFO"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:30 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 94
* hi{}
  - utter_hi
* INFORM_Time+INFORM_RestaurantName+INFORM_INTENT_Intent{"time": "11 am", "restaurant_name": "Chef Zhao", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "Palo Alto"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PriceRange{"price_range": "expensive"}
  - utter_INFORM_PriceRange
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 95
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Milpitas", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "take-out"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "3"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "4", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "half past 6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* REQUEST_StreetAddress+REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 96
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Shakewell", "time": "11:30 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "Villa D'este", "city": "San Francisco"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* INFORM_Time+NEGATE{"time": "4:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 97
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time+REQUEST_City
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "San Fran", "restaurant_name": "Lark", "time": "five in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_Cuisine+AFFIRM{"cuisine": "Spicy Indian"}
  - utter_INFORM_Cuisine+INFORM_StreetAddress+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 98
* hi{}
  - utter_hi
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "3", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName+REQUEST_Time
* INFORM_Time+INFORM_City+INFORM_RestaurantName{"time": "six pm", "city": "San Fran", "restaurant_name": "La Laguna"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 99
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Asian Fusion", "city": "Concord"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "dontcare"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5 o\"clock in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 100
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Santa Rosa", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "La Vera", "time": "5 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 101
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Stella Alpina Osteria", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "half past 7 in the evening", "date": "the 12th"}
  - utter_REQUEST_City
* INFORM_City{"city": "Burlingame"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress+REQUEST_PriceRange{"price_range": "moderate"}
  - utter_INFORM_StreetAddress+INFORM_PriceRange
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 102
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Pleasanton"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "13:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 103
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Santa Rosa", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ServesAlcohol+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol
* INFORM_ServesAlcohol+REQUEST_ALTS{"serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "19:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "Friday next week"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "1", "date": "the 6th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 104
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Cambodian", "city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "19:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+INFORM_PartySize+NEGATE{"time": "18:30", "party_size": "3"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE+GOODBYE{}
  - utter_GOODBYE

## 105
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Albany", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "13th of March"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5 o\"clock in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 106
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Rubio's", "city": "Cupertino"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "17:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_Cuisine+REQUEST_StreetAddress{"cuisine": "Taiwanese"}
  - utter_INFORM_StreetAddress+INFORM_Cuisine
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 107
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Seafood", "city": "San Mateo"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress+REQUEST_PriceRange{}
  - utter_INFORM_StreetAddress+INFORM_PriceRange
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 108
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "six in the evening"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName{"city": "SF", "restaurant_name": "Khamsa"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Mimi's", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{"price_range": "moderate"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 109
* hi{}
  - utter_hi
* INFORM_ServesAlcohol+INFORM_INTENT_Intent{"serves_alcohol": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_Cuisine{"price_range": "moderate", "cuisine": "burger"}
  - utter_REQUEST_City
* INFORM_City{"city": "Berkeley"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "Half past 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "seven pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 110
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "Union City"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Mexico Lindo", "time": "half past 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "4", "time": "1:45 pm"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "The Van's", "city": "Belmont"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 111
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Newark", "cuisine": "Afghan"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_PriceRange
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_Time+INFORM_Date+NEGATE{"time": "evening 5", "date": "the 7th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_ServesAlcohol+INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 112
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Izakaya"}
  - utter_REQUEST_City
* INFORM_City{"city": "Rohnert Park"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_City+REQUEST_ALTS{"city": "Pleasant Hill"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "1", "time": "8 in the night"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+REQUEST_PriceRange+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "11:45 in the morning"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 113
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Korean Barbeque", "city": "Santa Clara"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "20:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "7 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 114
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_ServesAlcohol+INFORM_PriceRange+INFORM_City{"serves_alcohol": "True", "price_range": "moderate", "city": "Oakland"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Gastrobar"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic+REQUEST_StreetAddress{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "11th of March"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "6 o\"clock in the evening", "party_size": "2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 115
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Time{"restaurant_name": "El Tesoro", "city": "SFO", "time": "7:45 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PhoneNumber+REQUEST_PriceRange{}
  - utter_INFORM_PhoneNumber+INFORM_PriceRange
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 116
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "inexpensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "Foster City", "cuisine": "Punjabi"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_PartySize+INFORM_Time+INFORM_INTENT_Intent+SELECT{"party_size": "2", "time": "13:45", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 117
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "March 2nd", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "jannah", "time": "4:30 pm"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_Time+NEGATE{"date": "the 8th", "time": "11:30"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 118
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "SFO", "cuisine": "Taiwanese"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "dontcare"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_PhoneNumber+REQUEST_StreetAddress{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "Half past 1 in the afternoon", "party_size": "3"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 119
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Chinese", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Mateo"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange{}
  - utter_INFORM_PriceRange
* INFORM_City+REQUEST_ALTS{"city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "12 o\"clock in the afternoon", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 120
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "freshwater fish"}
  - utter_REQUEST_City
* INFORM_City{"city": "Half Moon Bay"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time+INFORM_PartySize{"time": "11:00", "party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "five pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 121
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Berkeley"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Freshwater fish"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_PriceRange+REQUEST_StreetAddress{"price_range": "expensive"}
  - utter_INFORM_PriceRange+INFORM_StreetAddress
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 122
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_Date+INFORM_Time+INFORM_City+INFORM_RestaurantName{"date": "the 8th", "time": "17:00", "city": "Oakland", "restaurant_name": "Sukho"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 123
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Date{"restaurant_name": "Foreign Cinema", "date": "later today"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "evening 7", "party_size": "6"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_RestaurantName+NEGATE{"restaurant_name": "Black Angus"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "half past 7 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_Cuisine+AFFIRM{"cuisine": "American"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 124
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Parisian", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 11 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "evening 6", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 125
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Leandro"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Persian"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "twelve in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_Time+INFORM_INTENT_Intent{"party_size": "1", "time": "7:30 pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 126
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "the 2nd", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName{"city": "San Bruno", "restaurant_name": "Amami"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:30 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "8th of March"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+REQUEST_PriceRange+AFFIRM{"cuisine": "Pizza and Pasta", "price_range": "very expensive"}
  - utter_INFORM_Cuisine+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 127
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "evening 7", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_PartySize+INFORM_City{"restaurant_name": "Mister Jiu's", "party_size": "1", "city": "SFO"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 128
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "7 pm", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Pacific Catch", "city": "San Mateo"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+REQUEST_PhoneNumber+AFFIRM{"price_range": "very expensive"}
  - utter_INFORM_PriceRange+INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 129
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "dontcare", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "San Francisco", "cuisine": "Pizza and Pasta"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 130
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Greek", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Carlos"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Spicy Noodles"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_ServesAlcohol+REQUEST_ALTS{"serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 131
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "breakfast", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "evening 5:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress+REQUEST_ServesAlcohol{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 132
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName+REQUEST_Time
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "Antioch", "restaurant_name": "Chili's Grill", "time": "evening 5:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 133
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Petaluma"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Asian Fusion"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Time+INFORM_Date+INFORM_INTENT_Intent+SELECT{"time": "5:15 in the evening", "date": "next Friday", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+INFORM_PartySize+NEGATE{"time": "quarter past 1 in the afternoon", "party_size": "1"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_Date+INFORM_PartySize+NEGATE{"date": "13th of this month", "party_size": "3"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 134
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "7:45 in the evening", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_PartySize+INFORM_RestaurantName{"city": "Concord", "party_size": "1", "restaurant_name": "El Rancho"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 135
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Navin", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City
* INFORM_City+INFORM_Time{"city": "San Francisco", "time": "12:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 136
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "South San Francisco"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Sushi"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_PriceRange+INFORM_City+REQUEST_ALTS{"price_range": "moderate", "city": "San Mateo"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "1", "time": "10:45"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE+GOODBYE{}
  - utter_GOODBYE

## 137
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Foster City", "cuisine": "Izakaya"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "March 4th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "evening 6:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 138
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "burger"}
  - utter_REQUEST_City
* INFORM_HasLiveMusic+INFORM_City{"has_live_music": "True", "city": "Vallejo"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 139
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Sunnyvale", "cuisine": "non meat"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "one pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 140
* hi{}
  - utter_hi
* INFORM_Date+INFORM_City+INFORM_INTENT_Intent{"date": "10th of march", "city": "san fran", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "thanh long", "time": "1:15 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 141
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Coffeehouse", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Pleasanton"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "6 pm", "date": "March 2nd"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_PriceRange+REQUEST_StreetAddress+AFFIRM{"price_range": "very expensive"}
  - utter_INFORM_PriceRange+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 142
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Pasta"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:45 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 143
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Santa Clara", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Ramen"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "2", "time": "2 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "quarter past 6 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 144
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time+REQUEST_RestaurantName
* INFORM_Date+INFORM_City+INFORM_PartySize+INFORM_RestaurantName+INFORM_Time{"date": "12th of this month", "city": "Los Gatos", "party_size": "1", "restaurant_name": "Katsu", "time": "six in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 145
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Time{"restaurant_name": "Campo Fina", "city": "Healdsburg", "time": "5:45 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 146
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Burlingame"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_PriceRange{}
  - utter_INFORM_PriceRange+INFORM_ServesAlcohol
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 147
* hi{}
  - utter_hi
* INFORM_City+INFORM_Time+INFORM_INTENT_Intent{"city": "Concord", "time": "1:15 pm", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_Date+INFORM_RestaurantName{"date": "March 10th", "restaurant_name": "Agave Grill"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 148
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Szcheuan", "city": "South San Francisco"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "inexpensive"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 149
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7 in the evening"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_PartySize{"restaurant_name": "Maruya", "party_size": "3"}
  - utter_REQUEST_City
* INFORM_City+INFORM_Date{"city": "SFO", "date": "dontcare"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "2nd of March"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "twelve pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 150
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_Time+INFORM_RestaurantName{"time": "Evening 7:15", "restaurant_name": "Mcdonald's"}
  - utter_REQUEST_City
* INFORM_City{"city": "Hayward"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 151
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_Time+INFORM_City+INFORM_RestaurantName{"time": "quarter to 8 in the evening", "city": "Vacaville", "restaurant_name": "Hisui"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 152
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "to-go"}
  - utter_REQUEST_City
* INFORM_City{"city": "Walnut Creek"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6 o\"clock in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 153
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City+INFORM_Time{"restaurant_name": "Station House", "city": "Point Reyes Station", "time": "eleven in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 154
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "expensive", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine+INFORM_PriceRange{"cuisine": "Fish", "price_range": "moderate"}
  - utter_REQUEST_City
* INFORM_City{"city": "Burlingame"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter to 1 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 155
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "sushi", "city": "Alameda"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 1:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 156
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City+INFORM_PartySize{"city": "SF", "party_size": "4"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_Date+INFORM_RestaurantName+INFORM_Time{"date": "the 13th", "restaurant_name": "Limon", "time": "morning 11:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 157
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "freshwater fish", "city": "Hercules"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1:30 PM"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "6:30 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 158
* hi{}
  - utter_hi
* INFORM_ServesAlcohol+INFORM_INTENT_Intent{"serves_alcohol": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Healdsburg"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Ramen"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* REQUEST_HasLiveMusic+REQUEST_PriceRange{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "afternoon 1:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "4", "date": "the 8th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "evening 7:15"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 159
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Punjabi", "city": "Pleasanton"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE+GOODBYE{}
  - utter_GOODBYE

## 160
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Barbecue", "city": "Campbell"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Sushi"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "March 14th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 161
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Punjabi", "city": "milpitas"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_PriceRange
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Cuisine+REQUEST_ALTS{"cuisine": "Take-out"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "the 11th"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 1:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+INFORM_PartySize+NEGATE{"time": "twelve in the afternoon", "party_size": "1"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 162
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "SF"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Szcheuan"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_StreetAddress{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "1st of this month"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 163
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "African"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_HasLiveMusic+REQUEST_ALTS{"has_live_music": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "the 12th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:15 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Date+INFORM_INTENT_Intent{"date": "3rd of this month", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "12:30"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{"price_range": "expensive"}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 164
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Pleasant Hill", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_Time+INFORM_RestaurantName+INFORM_Date{"time": "afternoon 1:30", "restaurant_name": "Kobe", "date": "Saturday this week"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "Homestead", "city": "Oakland"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* REQUEST_Cuisine+REQUEST_StreetAddress+AFFIRM{"cuisine": "Burger"}
  - utter_INFORM_StreetAddress+INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 165
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_Date+INFORM_RestaurantName+INFORM_Time{"date": "13th of this month", "restaurant_name": "Kampai Bar", "time": "6:30 in the evening"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Jose"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 166
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Italian", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Santa Rosa"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "11th of March", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "six pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "4th of this month"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 167
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Newark"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_Cuisine{"price_range": "moderate", "cuisine": "Filipino"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "17:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 168
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_City+INFORM_Time+INFORM_PartySize{"restaurant_name": "Brixx Pizzeria", "city": "Petaluma", "time": "11 am", "party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 169
* hi{}
  - utter_hi
* INFORM_City+INFORM_PriceRange+INFORM_INTENT_Intent{"city": "Pleasanton", "price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Italian"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_REQ_MORE
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "1:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+INFORM_PartySize+NEGATE{"time": "7 pm", "party_size": "1"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "next friday"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 170
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "pasta"}
  - utter_REQUEST_City
* INFORM_City{"city": "Campbell"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 171
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "burger"}
  - utter_REQUEST_City
* INFORM_City{"city": "San francisco"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "evening 4:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 172
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Fremont", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "cantonese"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "Evening 6:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "12:00", "date": "march 8th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_PhoneNumber+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 173
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "San Bruno", "cuisine": "Latin American"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_ServesAlcohol+REQUEST_ALTS{"serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date+INFORM_PartySize{"date": "Next Friday", "party_size": "6"}
  - utter_REQUEST_Time
* INFORM_Date+INFORM_Time{"date": "the 9th", "time": "5:30 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Time+NEGATE{"time": "6:30 in the evening"}
  - utter_CONFIRM_City+CONFIRM_Time
* REQUEST_PriceRange+REQUEST_HasLiveMusic+AFFIRM{"price_range": "inexpensive"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 174
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Eric's", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "SF"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "17:45", "party_size": "2"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 175
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "quarter to 7 in the evening", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Sushi Omakase", "city": "Gilroy"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+AFFIRM{}
  - utter_INFORM_Cuisine+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE+GOODBYE{}
  - utter_GOODBYE

## 176
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City+INFORM_RestaurantName{"city": "Palo Alto", "restaurant_name": "Jing-jing Szechwan"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "12:15 pm", "date": "next Friday"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 177
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Sichuan"}
  - utter_REQUEST_City
* INFORM_City{"city": "Mountain View"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange{"price_range": "inexpensive"}
  - utter_INFORM_PriceRange
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "inexpensive"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "4", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 178
* hi{}
  - utter_hi
* INFORM_PartySize+INFORM_RestaurantName+INFORM_INTENT_Intent{"party_size": "3", "restaurant_name": "Koh Samui & The Monkey", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_Date+INFORM_City+INFORM_Time{"date": "Wednesday next week", "city": "San Francisco", "time": "7 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+INFORM_RestaurantName+NEGATE{"party_size": "2", "restaurant_name": "Crouching TIger"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_PriceRange+AFFIRM{"price_range": "inexpensive"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 179
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_City+INFORM_Time{"city": "Hayward", "time": "evening 5"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Paya"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_City+INFORM_RestaurantName+NEGATE{"city": "Cotati", "restaurant_name": "China Chef"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 180
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_City+INFORM_PriceRange+INFORM_Cuisine{"city": "San Bruno", "price_range": "inexpensive", "cuisine": "Taiwanese"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "dontcare"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Time+INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"time": "half past 12 in the afternoon", "party_size": "6", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "eleven am", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 181
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Singaporean", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Millbrae"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol+INFORM_PhoneNumber
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "Eleven in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 182
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "To-go", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Jose"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_ServesAlcohol+REQUEST_ALTS{"serves_alcohol": "True"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_Date+INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"date": "7th of March", "party_size": "5", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "6 pm", "party_size": "4"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_Time+NEGATE{"date": "12th of this month", "time": "twelve pm"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 183
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "12:30 in the afternoon", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_RestaurantName+INFORM_City+INFORM_PartySize{"restaurant_name": "Kabuto", "city": "SFO", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+OFFER_RestaurantName+OFFER_PartySize+OFFER_Date+OFFER_Time+NOTIFY_FAILURE
* NEGATE{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 184
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Dumplings", "city": "Cupertino"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange+REQUEST_ServesAlcohol{"price_range": "expensive"}
  - utter_INFORM_PriceRange+INFORM_ServesAlcohol
* INFORM_City+REQUEST_ALTS{"city": "Santa Clara"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "moderate"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "7th of this month", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 185
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "4th of March", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "the Alembic"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_PartySize{"time": "11:30", "party_size": "4"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_RestaurantName+NEGATE{"restaurant_name": "Paradise Sushi"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* INFORM_Date+NEGATE{"date": "the 2nd"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "1:30 pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+REQUEST_Cuisine+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 186
* hi{}
  - utter_hi
* INFORM_City+INFORM_Cuisine+INFORM_INTENT_Intent{"city": "San Anselmo", "cuisine": "Oriental", "intent": "FindRestaurants"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "one in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+INFORM_PartySize+NEGATE{"date": "14th of this month", "party_size": "5"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+REQUEST_ServesAlcohol+AFFIRM{"price_range": "moderate"}
  - utter_INFORM_ServesAlcohol+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 187
* hi{}
  - utter_hi
* INFORM_ServesAlcohol+INFORM_PriceRange+INFORM_INTENT_Intent{"serves_alcohol": "True", "price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Oakland", "cuisine": "Pizza"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_HasLiveMusic
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_REQ_MORE
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "half past 11 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "4"}
  - utter_CONFIRM_City+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 188
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "San Francisco", "cuisine": "veggie"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange{"price_range": "expensive"}
  - utter_INFORM_PriceRange
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "afternoon 12:30", "date": "Saturday this week"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_PhoneNumber+REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 189
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_ServesAlcohol+INFORM_City+INFORM_Cuisine{"serves_alcohol": "True", "city": "Pleasanton", "cuisine": "Ramen"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Date+INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"date": "3rd of March", "party_size": "6", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "Twelve pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 190
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City+REQUEST_RestaurantName
* INFORM_Date+INFORM_City+INFORM_RestaurantName+INFORM_Time{"date": "the 8th", "city": "San Francisco", "restaurant_name": "Bob's Steakhouse", "time": "5:15 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 191
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Yum Yum", "time": "six pm"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{"price_range": "expensive"}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 192
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "SF"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "curry"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Time+INFORM_Date+INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"time": "six pm", "date": "March 2nd", "party_size": "3", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 193
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Bj's", "city": "San Jose"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "19:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "half past 4 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "Mazzat", "city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 194
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5:15 pm"}
  - utter_REQUEST_City
* INFORM_City{"city": "Danville"}
  - utter_REQUEST_RestaurantName
* INFORM_Date+INFORM_RestaurantName{"date": "6th of this month", "restaurant_name": "Luna Loca"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 195
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_Time+REQUEST_City
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "El Cerrito", "restaurant_name": "Katana-ya", "time": "11:15 in the morning"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+INFORM_Time+NEGATE{"party_size": "1", "time": "1:15 pm"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 196
* hi{}
  - utter_hi
* INFORM_Date+INFORM_INTENT_Intent{"date": "friday next week", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "marnee", "city": "San Francisco"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "19:00"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+INFORM_HasLiveMusic+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 197
* hi{}
  - utter_hi
* INFORM_ServesAlcohol+INFORM_PriceRange+INFORM_INTENT_Intent{"serves_alcohol": "True", "price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Thai"}
  - utter_REQUEST_City
* INFORM_Cuisine+INFORM_City{"cuisine": "Oriental", "city": "Berkeley"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "1", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "12:30", "date": "the 13th"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* REQUEST_StreetAddress+REQUEST_PhoneNumber{}
  - utter_INFORM_StreetAddress+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 198
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_REQUEST_Cuisine
* INFORM_City+INFORM_Cuisine{"city": "Oakland", "cuisine": "Middle eastern"}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PriceRange+REQUEST_ALTS{"price_range": "inexpensive"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "13:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 199
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "6 in the evening", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City
* INFORM_RestaurantName+INFORM_City{"restaurant_name": "Kufu-ya", "city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 200
* hi{}
  - utter_hi
* INFORM_Date+INFORM_City+INFORM_INTENT_Intent{"date": "the 7th", "city": "SF", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_Time{"restaurant_name": "Oneup", "time": "quarter to 5 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_Time+NEGATE{"restaurant_name": "Bombay to Goa", "time": "17:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* REQUEST_ServesAlcohol+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Date+INFORM_INTENT_Intent{"date": "the 7th", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 201
* hi{}
  - utter_hi
* INFORM_HasLiveMusic+INFORM_INTENT_Intent{"has_live_music": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Oakland"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "breakfast & brunch"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_StreetAddress{}
  - utter_INFORM_PriceRange+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12:30 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 202
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Hisui 2", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "8 o\"clock in the night"}
  - utter_REQUEST_City
* INFORM_City{"city": "Vacaville"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_RestaurantName+NEGATE{"restaurant_name": "Red Jade"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Date
* REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "7:45 in the evening", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 203
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "burger", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Danville"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_PartySize+INFORM_INTENT_Intent+SELECT{"party_size": "1", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "quarter past 12 in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "6:30 pm", "date": "March 9th"}
  - utter_CONFIRM_Time+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "March 8th"}
  - utter_CONFIRM_City+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_HasLiveMusic
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 204
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Milpitas"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Cambodian"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_PartySize+INFORM_Time{"party_size": "4", "time": "6:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 205
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Freshwater fish"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Jose"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date{"date": "March 10th"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "six in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 206
* hi{}
  - utter_hi
* INFORM_ServesAlcohol+INFORM_INTENT_Intent{"serves_alcohol": "True", "intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "pizza and pasta", "city": "Campbell"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_PriceRange{"price_range": "moderate"}
  - utter_INFORM_PhoneNumber+INFORM_PriceRange
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Date+INFORM_PartySize{"date": "14th of March", "party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_PriceRange+REQUEST_HasLiveMusic+AFFIRM{"price_range": "moderate"}
  - utter_INFORM_HasLiveMusic+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 207
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_Cuisine{"price_range": "moderate", "cuisine": "Shabu-shabu"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* INFORM_PriceRange+INFORM_Cuisine+REQUEST_ALTS{"price_range": "expensive", "cuisine": "Barbecue"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "quarter past 5 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "7 pm"}
  - utter_CONFIRM_City+CONFIRM_Time
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 208
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName+REQUEST_City+REQUEST_Time
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "Marshall", "restaurant_name": "Nick's Cove", "time": "evening 7:30"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_Cuisine+AFFIRM{"cuisine": "Taiwanese"}
  - utter_INFORM_Cuisine+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 209
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Noodles"}
  - utter_REQUEST_City
* INFORM_City{"city": "Dublin"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "1"}
  - utter_REQUEST_Time
* INFORM_Time+INFORM_Date{"time": "13:00", "date": "7th of March"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "8th of March"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 210
* hi{}
  - utter_hi
* INFORM_Cuisine+INFORM_INTENT_Intent{"cuisine": "Pizza", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Occidental"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "2"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "one pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+NOTIFY_SUCCESS
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 211
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName+INFORM_Time{"city": "Alameda", "restaurant_name": "Angel Fish", "time": "twelve pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* REQUEST_HasLiveMusic+REQUEST_Cuisine{"cuisine": "Burger"}
  - utter_INFORM_Cuisine+INFORM_HasLiveMusic
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 212
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "Dublin", "cuisine": "burger"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "evening 7:15", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "7 pm"}
  - utter_CONFIRM_City+CONFIRM_Time
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "3", "date": "14th of March"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PriceRange+AFFIRM{"price_range": "very expensive"}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 213
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Oakland", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_HasLiveMusic+INFORM_Cuisine{"has_live_music": "True", "cuisine": "Jamaican"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange{}
  - utter_INFORM_PriceRange
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "twelve pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "3rd of March"}
  - utter_CONFIRM_Time+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "March 4th"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+REQUEST_ServesAlcohol+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "7:30 pm", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 214
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine+INFORM_PriceRange{"city": "San Jose", "cuisine": "pizza and pasta", "price_range": "dontcare"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress+REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* INFORM_Time+INFORM_INTENT_Intent+SELECT{"time": "12:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 215
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Pizza and Pasta", "city": "Santa Rosa"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_HasLiveMusic+REQUEST_ServesAlcohol{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "1"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "7:30 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "4", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "afternoon 12:30", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 216
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_INTENT_Intent{"price_range": "moderate", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "El Cerrito"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Korean"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_StreetAddress{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time{"time": "12:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 217
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time+REQUEST_RestaurantName
* INFORM_Date+INFORM_RestaurantName+INFORM_City+INFORM_Time{"date": "12th of this month", "restaurant_name": "Firehouse Grill", "city": "Sunnyvale", "time": "6:45 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_ServesAlcohol+REQUEST_Cuisine+AFFIRM{"cuisine": "Pizza and Pasta"}
  - utter_INFORM_Cuisine+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 218
* hi{}
  - utter_hi
* INFORM_City+INFORM_INTENT_Intent{"city": "Alamo", "intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_Cuisine{"price_range": "moderate", "cuisine": "American"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* INFORM_Date+INFORM_INTENT_Intent+SELECT{"date": "March 8th", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "seven pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "one in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_Time
* INFORM_PartySize+INFORM_Date+NEGATE{"party_size": "3", "date": "14th of this month"}
  - utter_CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 219
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_INTENT_Intent{"restaurant_name": "Anar", "intent": "ReserveRestaurant"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12 pm"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_PartySize+NEGATE{"party_size": "3"}
  - utter_CONFIRM_City+CONFIRM_PartySize
* INFORM_RestaurantName+INFORM_PartySize+NEGATE{"restaurant_name": "El Amigo", "party_size": "1"}
  - utter_CONFIRM_RestaurantName+CONFIRM_PartySize
* REQUEST_HasLiveMusic+REQUEST_PriceRange+AFFIRM{"price_range": "inexpensive"}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_Time+INFORM_INTENT_Intent{"time": "17:00", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 220
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City+INFORM_PriceRange{"city": "Milpitas", "price_range": "moderate"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Take-out"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11 am"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* INFORM_Date+NEGATE{"date": "March 14th"}
  - utter_CONFIRM_City+CONFIRM_Date
* INFORM_Time+NEGATE{"time": "18:00"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 221
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Parisian"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Francisco"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PriceRange+REQUEST_PhoneNumber{}
  - utter_INFORM_PriceRange+INFORM_PhoneNumber
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "morning 11"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_ServesAlcohol{}
  - utter_INFORM_ServesAlcohol
* REQUEST_StreetAddress+REQUEST_HasLiveMusic{}
  - utter_INFORM_HasLiveMusic+INFORM_StreetAddress
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 222
* hi{}
  - utter_hi
* INFORM_PriceRange+INFORM_Cuisine+INFORM_INTENT_Intent{"price_range": "expensive", "cuisine": "Freshwater fish", "intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "SFO"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PhoneNumber{}
  - utter_INFORM_PhoneNumber
* INFORM_INTENT_Intent+SELECT{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "5 o\"clock in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+REQUEST_HasLiveMusic+AFFIRM{}
  - utter_INFORM_HasLiveMusic+INFORM_ServesAlcohol+NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 223
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City+REQUEST_Cuisine
* INFORM_Cuisine+INFORM_City{"cuisine": "Burger", "city": "San Francisco"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_ServesAlcohol+REQUEST_StreetAddress{}
  - utter_INFORM_StreetAddress+INFORM_ServesAlcohol
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_Time+INFORM_Date{"time": "evening 5", "date": "Tuesday next week"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 224
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Foster City"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Spicy Indian"}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_ALTS{}
  - utter_OFFER_RestaurantName+OFFER_City
* REQUEST_PriceRange{"price_range": "moderate"}
  - utter_INFORM_PriceRange
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "afternoon 1:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Time+INFORM_Date+NEGATE{"time": "5:45 pm", "date": "4th of this month"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 225
* hi{}
  - utter_hi
* INFORM_Time+INFORM_INTENT_Intent{"time": "6 pm", "intent": "ReserveRestaurant"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName+INFORM_PartySize{"restaurant_name": "Zaoh", "party_size": "6"}
  - utter_REQUEST_City
* INFORM_City{"city": "San Fran"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_StreetAddress+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_RestaurantName+INFORM_PartySize+INFORM_INTENT_Intent{"restaurant_name": "Mcdonald's", "party_size": "5", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 226
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_City+REQUEST_Time
* INFORM_Time+INFORM_PartySize+INFORM_City{"time": "half past 1 in the afternoon", "party_size": "2", "city": "Morgan Hill"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Odeum"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_RestaurantName+INFORM_City+NEGATE{"restaurant_name": "Celia's", "city": "SFO"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City
* REQUEST_PriceRange+AFFIRM{}
  - utter_INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 227
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine
* INFORM_Cuisine{"cuisine": "Mediterranean"}
  - utter_REQUEST_City
* INFORM_City{"city": "SF"}
  - utter_OFFER_RestaurantName+OFFER_City
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "11:15"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 228
* hi{}
  - utter_hi
* INFORM_RestaurantName+INFORM_City+INFORM_INTENT_Intent{"restaurant_name": "Aquitaine", "city": "SF", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "12 o\"clock in the afternoon"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_Date+NEGATE{"date": "14th of this month"}
  - utter_CONFIRM_Time+CONFIRM_Date
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* REQUEST_HasLiveMusic+REQUEST_PhoneNumber{}
  - utter_INFORM_HasLiveMusic+INFORM_PhoneNumber
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 229
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "ReserveRestaurant"}
  - utter_REQUEST_Time+REQUEST_City
* INFORM_Time+INFORM_City{"time": "half past 1 in the afternoon", "city": "Mountain View"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Paul Martin's"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+AFFIRM{}
  - utter_INFORM_StreetAddress+NOTIFY_SUCCESS
* REQUEST_ServesAlcohol+REQUEST_PriceRange{}
  - utter_INFORM_PriceRange+INFORM_ServesAlcohol
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 230
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_City
* INFORM_City{"city": "Redwood City"}
  - utter_REQUEST_Cuisine
* INFORM_PriceRange+INFORM_Cuisine{"price_range": "moderate", "cuisine": "Spanish"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT+INFORM_PartySize{"party_size": "4"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "evening 5:45"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 231
* hi{}
  - utter_hi
* INFORM_PartySize+INFORM_City+INFORM_INTENT_Intent{"party_size": "2", "city": "Milpitas", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "17:30"}
  - utter_REQUEST_RestaurantName
* INFORM_RestaurantName{"restaurant_name": "Ta"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_Date+CONFIRM_PartySize
* REQUEST_StreetAddress+REQUEST_PhoneNumber+AFFIRM{}
  - utter_INFORM_StreetAddress+INFORM_PhoneNumber+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

## 232
* hi{}
  - utter_hi
* INFORM_INTENT_Intent{"intent": "FindRestaurants"}
  - utter_REQUEST_Cuisine+REQUEST_City
* INFORM_City+INFORM_Cuisine{"city": "SF", "cuisine": "Thai"}
  - utter_OFFER_RestaurantName+OFFER_City+INFORM_COUNT_Count
* REQUEST_PhoneNumber+REQUEST_StreetAddress{}
  - utter_INFORM_PhoneNumber+INFORM_StreetAddress
* SELECT{}
  - utter_OFFER_INTENT_Intent
* AFFIRM_INTENT{}
  - utter_REQUEST_Time
* INFORM_Time{"time": "6 in the evening"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* INFORM_PartySize+NEGATE{"party_size": "1"}
  - utter_CONFIRM_Time+CONFIRM_PartySize
* AFFIRM{}
  - utter_NOTIFY_SUCCESS
* THANK_YOU{}
  - utter_REQ_MORE
* NEGATE+THANK_YOU{}
  - utter_GOODBYE

## 233
* hi{}
  - utter_hi
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "3", "intent": "ReserveRestaurant"}
  - utter_REQUEST_Time
* INFORM_Time{"time": "half past 11 in the morning"}
  - utter_REQUEST_City+REQUEST_RestaurantName
* INFORM_City+INFORM_RestaurantName{"city": "San Mateo", "restaurant_name": "Sushi Yoshizumi"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_ServesAlcohol+AFFIRM{}
  - utter_NOTIFY_FAILURE+REQ_MORE
* INFORM_PartySize+INFORM_INTENT_Intent{"party_size": "2", "intent": "ReserveRestaurant"}
  - utter_CONFIRM_RestaurantName+CONFIRM_City+CONFIRM_Time+CONFIRM_PartySize+CONFIRM_Date
* REQUEST_PhoneNumber+REQUEST_PriceRange+AFFIRM{"price_range": "expensive"}
  - utter_INFORM_PhoneNumber+INFORM_PriceRange+NOTIFY_SUCCESS
* THANK_YOU+GOODBYE{}
  - utter_GOODBYE

