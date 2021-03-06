export enum Structure {
  EXTENSION = "extension",
  RAMPART = "rampart",
  ROAD = "road",
  SPAWN = "spawn",
  LINK = "link",
  WALL = "wall",
  KEEPER_LAIR = "keeperLair",
  CONTROLLER = "controller",
  STORAGE = "storage",
  TOWER = "tower",
  OBSERVER = "observer",
  POWER_BANK = "powerBank",
  POWER_SPAWN = "powerSpawn",
  EXTRACTOR = "extractor",
  LAB = "lab",
  TERMINAL = "terminal",
  CONTAINER = "container",
  NUKER = "nuker",
  PORTAL = "portal",
}

export enum Find {
  EXIT_TOP = FIND_EXIT_TOP,
  EXIT_RIGHT = FIND_EXIT_RIGHT,
  EXIT_BOTTOM = FIND_EXIT_BOTTOM,
  EXIT_LEFT = FIND_EXIT_LEFT,
  EXIT = FIND_EXIT,
  CREEPS = FIND_CREEPS,
  MY_CREEPS = FIND_MY_CREEPS,
  HOSTILE_CREEPS = FIND_HOSTILE_CREEPS,
  SOURCES_ACTIVE = FIND_SOURCES_ACTIVE,
  SOURCES = FIND_SOURCES,
  DROPPED_RESOURCES = FIND_DROPPED_RESOURCES,
  DROPPED_ENERGY = FIND_DROPPED_ENERGY,
  STRUCTURES = FIND_STRUCTURES,
  MY_STRUCTURES = FIND_MY_STRUCTURES,
  HOSTILE_STRUCTURES = FIND_HOSTILE_STRUCTURES,
  FLAGS = FIND_FLAGS,
  CONSTRUCTION_SITES = FIND_CONSTRUCTION_SITES,
  MY_SPAWNS = FIND_MY_SPAWNS,
  HOSTILE_SPAWNS = FIND_HOSTILE_SPAWNS,
  MY_CONSTRUCTION_SITES = FIND_MY_CONSTRUCTION_SITES,
  HOSTILE_CONSTRUCTION_SITES = FIND_HOSTILE_CONSTRUCTION_SITES,
  MINERALS = FIND_MINERALS,
  NUKES = FIND_NUKES
}

export enum Errors {
NOT_OWNER = ERR_NOT_OWNER,
  NO_PATH = ERR_NO_PATH,
  NAME_EXISTS = ERR_NAME_EXISTS,
  BUSY = ERR_BUSY,
  NOT_FOUND = ERR_NOT_FOUND,
  NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES,
  NOT_ENOUGH_ENERGY = ERR_NOT_ENOUGH_ENERGY,
  INVALID_TARGET = ERR_INVALID_TARGET,
  FULL = ERR_FULL,
  NOT_IN_RANGE = ERR_NOT_IN_RANGE,
  INVALID_ARGS = ERR_INVALID_ARGS,
  TIRED = ERR_TIRED,
  NO_BODYPART = ERR_NO_BODYPART,
  NOT_ENOUGH_EXTENSIONS = ERR_NOT_ENOUGH_EXTENSIONS,
  RCL_NOT_ENOUGH = ERR_RCL_NOT_ENOUGH,
  GCL_NOT_ENOUGH = ERR_GCL_NOT_ENOUGH,
}
