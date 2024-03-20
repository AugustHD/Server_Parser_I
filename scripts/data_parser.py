import csv
import json
import yaml
import xml.etree.ElementTree as ET

csv_file = 'data.csv'
json_file = 'data.json'
yaml_file = 'data.yaml'
txt_file = 'data.txt'
xml_file = 'data.xml'

def parse_csv():
    try:
        with open(csv_file, 'r') as file:
            reader = csv.reader(file)
            data = list(reader)
            return data
    except FileNotFoundError:
        print(f"File '{csv_file}' not found.")
        return None

def parse_json():
    try:
        with open(json_file, 'r') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print(f"File '{json_file}' not found.")
        return None

def parse_yaml():
    try:
        with open(yaml_file, 'r') as file:
            data = yaml.safe_load(file)
            return data
    except FileNotFoundError:
        print(f"File '{yaml_file}' not found.")
        return None

def parse_txt():
    try:
        with open(txt_file, 'r') as file:
            data = file.read()
            return data
    except FileNotFoundError:
        print(f"File '{txt_file}' not found.")
        return None

def parse_xml():
    try:
        tree = ET.parse(xml_file)
        root = tree.getroot()
        data = []

        for book in root.findall('book'):
            book_data = {}
            for child in book:
                book_data[child.tag] = child.text
            data.append(book_data)

        return data
    except FileNotFoundError:
        print(f"File '{xml_file}' not found.")
        return None

# Usage
print(parse_txt())
print(parse_csv())
print(parse_yaml())
print(parse_xml())
print(parse_json())
