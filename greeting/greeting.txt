// C++
#include <iostream>
#include <chrono>
#include <vector>

void Greeting(std::string name, std::string format) {
    using namespace std::chrono;
    system_clock::time_point today = system_clock::now();
    std::time_t tt = system_clock::to_time_t(today);
    std::string fullDate = ctime(&tt);
    std::string weekday = fullDate.substr(0, 3);
    std::string month = fullDate.substr(4, 3);
    std::string date = fullDate.substr(8, 2);
    std::string hour = fullDate.substr(11, 2);
    std::string minute = fullDate.substr(14, 2);
    std::string second = fullDate.substr(17, 2);
    std::string year = fullDate.substr(20, 4);
    std::cout << "Hello, " << name << "!" << std::endl;
    if (format == "US") {
        std::cout << "Today's date is " << weekday << " " month << " " << date << ", " << year << std::endl;
        std::cout << "The current time is " << hour << ":" << minute << "." << second << std::endl;
    }
    else if (format == "EU") {
        std::cout << "Today's date is " << weekday << " " << date << " " << month << " " << year << std::endl;
        std::cout << "The current time is " << hour << ":" << minute << "." << second << std::endl;
    }
}

int main(int argc, char** argv) {
    std::vector<std::string> formats = { "US", "EU" };
    if (argc < 3) {
        std::cout << "Usage: greeting [your name] [time format]\n"
            << "\tFormats: US EU" << std::endl;
        return 0;
    }
    else {
        bool validFormat = false;
        for (auto& i : formats) {
            if (i == argv[2]) {
                validFormat = true;
            }
        }
        if (validFormat)
            Greeting(argv[1], argv[2]);
        else {
            std::cout << argv[2] << " is not a valid format!\n"
                << "\tValid Formats: US EU" << std::endl;
            return 0;
        }
    }
    return 0;
}
