#include <bitset>
#include <chrono>
#include <iostream>
#include <thread>

int main() {
  int val = 1;
  for (int i = 0; i < 60; i++) {
    std::cout << "Decimal: " << val << ", Binary: " << std::bitset<32>(val)
              << ", iterasi ke-" << i + 1 << std::endl;
    val <<= 1;
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }
  return 0;
}
