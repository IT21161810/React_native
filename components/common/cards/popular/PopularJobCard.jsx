import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://c4.wallpaperflare.com/wallpaper/325/140/18/alone-stars-purple-background-hd-wallpaper-preview.jpg' }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}> {item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
  
}

export default PopularJobCard