import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CalendarMonth from '../Calendar/CalendarMonth.vue'

describe('CalendarMonth', () => {
  it('has correct rows number', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 0, year: 2025, weekDays: [] } })
    const days = wrapper.findAll('div').length - 1 //minus wrapper element
    expect(days).toBe(35)
  })

  it('has correct rows number with extra row', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 11, year: 2024, weekDays: [] } })
    const days = wrapper.findAll('div').length - 1 //minus wrapper element
    expect(days).toBe(42)
  })

  it('has correct number of days for last month', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 11, year: 2024, weekDays: [] } })
    const lastMonthDays = wrapper.findAll('.lastMonthDays').length
    expect(lastMonthDays).toBe(6)
  })

  it('has correct number of days for next month', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 11, year: 2024, weekDays: [] } })
    const nextMonthDays = wrapper.findAll('.nextMonthDays').length
    expect(nextMonthDays).toBe(5)
  })

  it('has correct number of days for current month', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 11, year: 2024, weekDays: [] } })
    const currentMonthDays = wrapper.findAll('.currentMonthDays').length
    expect(currentMonthDays).toBe(31)
  })

  it('has correct days order for last month', () => {
    const wrapper = mount(CalendarMonth, { props: { month: 11, year: 2024, weekDays: [] } })
    const lastMonthDays = wrapper.findAll('.lastMonthDays').map((el) => el.text())
    expect(lastMonthDays).toEqual(['25', '26', '27', '28', '29', '30'])
  })
})
